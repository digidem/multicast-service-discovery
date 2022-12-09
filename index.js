import { TypedEmitter } from 'tiny-typed-emitter'
import dnssd from '@gravitysoftware/dnssd'

/**
 * @typedef {Object} Service
 * @property {string} host - hostname of the service
 * @property {number} port - port of the service
 * @property {Object<string, any>} txt - TXT records of the service
 * @property {string[]} [addresses] - addresses of the service
 */

/**
 * @typedef {Object} ServiceType
 * @property {string} name - name of the service type
 * @property {string} protocol - protocol of the service type
 * @property {string[]} subtypes - subtypes of the service type
 */

/**
 * @typedef {Object} MdnsDiscoveryEvents
 * @property {(service: Service) => void} service
 * @property {(serviceDown: Service) => void} serviceDown
 * @property {(serviceChanged: Service) => void} serviceChanged
 * @property {(stopAnnouncing: void) => void} stopAnnouncing
 * @property {(stopLookup: void) => void} stopLookup
 * @property {(error: Error) => void} error
 */

/**
 * Find services through mdns service discovery
 * @extends {TypedEmitter<MdnsDiscoveryEvents>}
 */
export class MdnsDiscovery extends TypedEmitter {
  /**
   * @type {import('@gravitysoftware/dnssd').Advertisement|undefined}
   */
  #advertise

  /**
   * @type {import('@gravitysoftware/dnssd').Browser|undefined}
   */
  #browse

  /**
   * Lookup a service by its name
   * @param {ServiceType | string} serviceType
   */
  async lookup(serviceType) {
    if (this.#browse) {
      return
    }

    const service =
      typeof serviceType === 'string' ? dnssd.tcp(serviceType) : serviceType

    this.#browse = new dnssd.Browser(service)

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

    this.#browse.on('stop', () => {
      this.emit('stopLookup')
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
    this.on('stopLookup', () => {
      this.#browse = undefined
      this.removeAllListeners('service')
      this.removeAllListeners('serviceChanged')
      this.removeAllListeners('serviceDown')
      this.removeAllListeners('stopLookup')
    })
  }

  /**
   * Announce a service with a name and port
   * @param {ServiceType|string} serviceType
   * @param {Service} options
   */
  announce(serviceType, options) {
    const { port, txt } = options

    if (this.#advertise) {
      return
    }

    const service =
      typeof serviceType === 'string' ? dnssd.tcp(serviceType) : serviceType

    this.#advertise = new dnssd.Advertisement(service, port, {
      txt,
    })

    this.#advertise.on('error', (error) => {
      this.emit('error', error)
    })

    this.#advertise.on('stopped', () => {
      this.emit('stopAnnouncing')
    })

    this.#advertise.start()
  }

  /**
   * @param {Object<string, any>} txt - object with keys and values of txt records. keys must be less than 9 characters, values must be a string, buffer, number, or boolean. More details on validation restrictions: https://gitlab.com/gravitysoftware/dnssd.js/-/tree/master#validations
   */
  updateTxt(txt) {
    this.#advertise?.updateTXT(txt)
  }

  /**
   * @param {ServiceType} options
   */
  createServiceType(options) {
    return new dnssd.ServiceType(options)
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

    this.on('stopAnnouncing', () => {
      this.#advertise = undefined
      this.removeAllListeners('stopAnnouncing')
    })
  }

  /**
   * Unannounce and/or stop lookup of a service
   */
  destroy() {
    this.unannounce()
    this.stopLookup()
  }
}
