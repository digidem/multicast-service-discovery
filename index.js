import { EventEmitter } from 'events'
import dnssd from '@gravitysoftware/dnssd'

/**
 * Find services through mdns service discovery
 */
export class MdnsDiscovery extends EventEmitter {
	#advertise
	#browse

	/**
	 * @param {Object} [options]
	 * @param {string} [options.host=mdns-sd-discovery] - hostname for the service (.local suffix is added automatically)
	 */
	constructor (options = {}) {
		super()
		this.host = options.host || 'mdns-sd-discovery'
	}

	/**
	 * Lookup a service by its name
	 * @param {string} name
	 */
	async lookup (name) {
		this.#browse = dnssd.Browser(dnssd.tcp(`_${name}`)).start()

		this.#browse.on('serviceUp', (service) => {
			this.emit('service', name, service)
		})
	}

	/**
	 * Stop looking up a service
	 */
	async stopLookup () {
		this.#browse.stop()
	}

	/**
	 * Announce a service with a name and port
	 * @param {string} name
	 * @param {Object} [options]
   * @param {string} [options.host=mdns-sd-discovery] - hostname for the service (.local suffix is added automatically)
	 * @param {number} [options.port=4321] - port for the service
	 * @returns {Promise}
	 */
	async announce (name, options = {}) {
		const {
			port = 4321,
			host = options.host || this.host
		} = options

		this.#advertise = new dnssd.Advertisement(dnssd.tcp(`_${name}`), port, {
			name: `_${name}`,
			host
		})

		return new Promise((resolve) => {
			this.#advertise.start(() => {
				resolve()
			})
		})
	}

	/**
	 * Stop announcing the service
	 * @returns {Promise}
	 */
	async unannounce () {
		return new Promise((resolve) => {
			this.#advertise.stop(() => {
				resolve()
			})
		})
	}

	/**
	 * Unannounce and/or stop lookup of a service
	 * @returns {Promise}
	 */
	async destroy () {
		if (this.#advertise) {
			await this.unannounce()
		}

		if (this.#browse) {
			this.stopLookup()
		}
	}
}
