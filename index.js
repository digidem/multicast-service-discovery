import { EventEmitter } from 'events'
import dnssd from '@gravitysoftware/dnssd'

export class Discovery extends EventEmitter {
	#advertise
	#browse

	async lookup (name) {
		console.log('lookup', `_${name}`)
		this.#browse = dnssd.Browser(dnssd.tcp(`_${name}`))

		this.#browse.on('serviceUp', (service) => {
			console.log('service up', service)
			this.emit('peer', name, service)
		})

		// this.#browse.on('serviceDown', (service) => {})

		return new Promise((resolve) => {
			this.#browse.start(() => {
				resolve()
			})
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
		console.log('announce', `_${name}`)
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

	async unannounce (name, port, options = {}) {
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
