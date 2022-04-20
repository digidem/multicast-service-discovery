import { EventEmitter } from 'events'
import dnssd from '@gravitysoftware/dnssd'

export class Discovery extends EventEmitter {
	#advertise
	#browse

	async lookup (name) {
		this.#browse = dnssd.Browser(dnssd.tcp(`_${name}`)).start()

		this.#browse.on('serviceUp', (service) => {
			this.emit('peer', name, service)
		})
	}

	async stopLookup () {
		return new Promise((resolve) => {
			this.#browse.stop(() => {
				resolve()
			})
		})
	}

	async announce (name, port = 4321, options = {}) {
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

	async unAnnounce (name, port, options = {}) {
		return new Promise((resolve) => {
			this.#advertise.stop(() => {
				resolve()
			})
		})
	}

	async destroy () {
		if (this.#advertise) {
			await this.unannounce()
		}

		if (this.#browse) {
			await this.stopLookup()
		}
	}
}
