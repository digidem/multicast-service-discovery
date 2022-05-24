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
		// Not sure if we should have a default for this? dnssd defaults to os.hostname() if this is undefined, so I think we should just leave it as undefined and let dnssd choose the default.
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
		// Need to track `serviceDown` event too, since peers will come and go. Maybe this module should maintain the state of currently connected peers?
	}

	/**
	 * Stop looking up a service
	 */
	async stopLookup () {
		// Need to check this.#browse, in case called before this.lookup()
		this.#browse.stop()
		// Remove event listeners
		// Maybe de-reference this.#browse here for garbage collection? Otherwise GC will happen when next calling lookup() which is also fine
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
		// What happens if called twice without an unannounce? Would end up with two instances?
		const {
			// I would lean towards making this a required option, because I can't think of a use-case for having a default (the user would need to have a service running on this port).
			port = 4321,
			// Not sure if we should have a default for this? dnssd defaults to os.hostname() if this is undefined, so I think we should just leave it as undefined and let dnssd choose the default.
			host = options.host || this.host
		} = options

		this.#advertise = new dnssd.Advertisement(dnssd.tcp(`_${name}`), port, {
			name: `_${name}`,
			host
		})

		return new Promise((resolve) => {
			this.#advertise.start(() => {
				// catch error passed to the callback and throw
				resolve()
			})
		})
	}

	/**
	 * Stop announcing the service
	 * @param {string} [immediate=false] - if true, unannounce immediately
	 * @returns {Promise}
	 */
	async unannounce (immediate = false) {
		return new Promise((resolve) => {
			this.#advertise.stop(immediate, () => {
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
