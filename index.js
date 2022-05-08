import { EventEmitter } from 'events'
import dnssd from '@gravitysoftware/dnssd'

/**
 * Find peers through mdns service discovery
 */
export class Discovery extends EventEmitter {
	#advertise
	#browse

	/**
	 * Lookup a service by its name
	 * @param {string} name
	 */
	async lookup (name) {
		this.#browse = dnssd.Browser(dnssd.tcp(`_${name}`)).start()

		this.#browse.on('serviceUp', (service) => {
			this.emit('peer', name, service)
		})
	}

	/**
	 * Stop looking up a service
	 */
	async stopLookup () {
		return new Promise((resolve) => {
			this.#browse.stop(() => {
				resolve()
			})
		})
	}

	/**
	 * Announce a service with a name and port
	 * @param {string} name
	 * @param {number} [port]
	 * @returns {Promise}
	 */
	async announce (name, port = 4321) {
		this.#advertise = new dnssd.Advertisement(dnssd.tcp(`_${name}`), port, {
			name: `_${name}`,
			host: 'mdns-sd-discovery.local'
		})

		return new Promise((resolve) => {
			this.#advertise.start(() => {
				resolve()
			})
		})
	}

	/**
	 * Stop announcing the service
	 */
	async unannounce () {
		return new Promise((resolve) => {
			this.#advertise.stop(() => {
				resolve()
			})
		})
	}

	/**
	 * Unannounce and/or 
	 * @returns {Promise}
	 */
	async destroy () {
		if (this.#advertise) {
			await this.unannounce()
		}

		if (this.#browse) {
			await this.stopLookup()
		}
	}
}
