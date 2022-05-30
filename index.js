import { TypedEmitter } from 'tiny-typed-emitter'
import dnssd from '@gravitysoftware/dnssd'

/**
 * Find services through mdns service discovery
 */
export class MdnsDiscovery extends TypedEmitter {
	/**
	 * @type {dnssd.Advertisement|null}
	 */
	#advertise

	/**
	 * @type {dnssd.Browser|null}
	 */
	#browse

	/**
	 * Lookup a service by its name
	 * @param {string} name
	 */
	async lookup (name) {
		this.#browse = new dnssd.Browser(dnssd.tcp(`_${name}`))

		this.#browse.on('error', (error) => {
			this.emit('error', error)
		})

		this.#browse.on('serviceUp', (service) => {
			this.emit('service', service)
		})

		this.#browse.on('serviceDown', (service) => {
			this.emit('service-down', service)
		})

		this.#browse.start()
	}

	/**
	 * Stop looking up a service
	 */
	async stopLookup () {
		if (!this.#browse) {
			return
		}

		this.removeAllListeners('service')
		this.removeAllListeners('service-down')
		this.#browse.stop()
		this.#browse = null
	}

	/**
	 * Announce a service with a name and port
	 * @param {string} name
	 * @param {Object} options
	 * @param {number} options.port - port for the service
	 * @param {object} options.txt - txt records for the service
	 */
	announce (name, options) {
		const { port, txt } = options

		this.#advertise = new dnssd.Advertisement(dnssd.tcp(name), port, {
			txt
		})

		this.#advertise.on('error', (error) => {
			this.emit('error', error)
		})

		this.#advertise.start()
	}

	/**
	 * Stop announcing the service
	 * @param {boolean} [immediate=false] - if true, unannounce immediately
	 */
	unannounce (immediate = false) {
		if (!this.#advertise) {
			return
		}

		this.#advertise.stop(immediate)
	}

	/**
	 * Unannounce and/or stop lookup of a service
	 */
	destroy () {
		this.removeAllListeners('error')
		this.unannounce()
		this.stopLookup()
	}
}
