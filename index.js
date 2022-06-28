import { TypedEmitter } from 'tiny-typed-emitter'
import dnssd from '@gravitysoftware/dnssd'

/**
 * @typedef {Object} MdnsDiscoveryEvents
 * @property {(service: import('@gravitysoftware/dnssd').ServiceType) => void} service
 * @property {(serviceDown: import('@gravitysoftware/dnssd').ServiceType) => void} serviceDown
 * @property {(serviceChanged: import('@gravitysoftware/dnssd').ServiceType) => void} serviceChanged
 * @property {(stopped: void) => void} stopped
 * @property {(error: Error) => void} error
 */

/**
 * Find services through mdns service discovery
 * @extends {TypedEmitter<MdnsDiscoveryEvents>}
 */
export class MdnsDiscovery extends TypedEmitter {
  /**
   * @type {dnssd.Advertisement|undefined}
   */
  #advertise

  /**
   * @type {dnssd.Browser|undefined}
   */
  #browse

  /**
   * Lookup a service by its name
   * @param {string} name
   */
  async lookup(name) {
    if (this.#browse) {
      return
    }

    this.#browse = new dnssd.Browser(dnssd.tcp(`_${name}`))

    this.#browse.on('error', (error) => {
      this.emit('error', error)
    })

    this.#browse.on('serviceUp', (service) => {
      this.emit('service', service)
    })

    this.#browse.on('serviceChanged', (service) => {
      this.emit('serviceChanged', service)
    })

    this.#browse.on('serviceDown', (service) => {
      this.emit('serviceDown', service)
    })

    this.#browse.start()
  }

  /**
   * Stop looking up a service
   */
  async stopLookup() {
    if (!this.#browse) {
      return
    }

    this.#browse.stop()
    this.#browse = undefined
    this.removeAllListeners('service')
    this.removeAllListeners('serviceChanged')
    this.removeAllListeners('serviceDown')
  }

  /**
   * Announce a service with a name and port
   * @param {string} name
   * @param {Object} options
   * @param {number} options.port - port for the service
   * @param {object} options.txt - txt records for the service
   */
  announce(name, options) {
    const { port, txt } = options

    if (this.#advertise) {
      return
    }

    this.#advertise = new dnssd.Advertisement(dnssd.tcp(name), port, {
      txt,
    })

    this.#advertise.on('error', (error) => {
      this.emit('error', error)
    })

    this.#advertise.on('stopped', () => {
      this.emit('stopped')
    })

    this.#advertise.start()
  }

  /**
   * @param {object} txt - object with keys and values of txt records. keys must be less than 9 characters, values must be a string, buffer, number, or boolean. More details on validation restrictions: https://gitlab.com/gravitysoftware/dnssd.js/-/tree/master#validations
   */
  updateTxt(txt) {
    this.#advertise?.updateTXT(txt)
  }

  /**
   * Stop announcing the service
   * @param {boolean} [immediate=false] - if true, unannounce immediately
   */
  unannounce(immediate = false) {
    if (!this.#advertise) {
      return
    }

    this.#advertise.stop(immediate)
    this.#advertise = undefined
    this.removeAllListeners('stopped')
  }

  /**
   * Unannounce and/or stop lookup of a service
   */
  destroy() {
    this.removeAllListeners('error')
    this.unannounce()
    this.stopLookup()
  }
}
