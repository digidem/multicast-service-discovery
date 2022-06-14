import { test } from 'brittle'

import { MdnsDiscovery } from "../index.js";

test('find services', async (t) => {
	t.plan(2)

	const discover1 = new MdnsDiscovery()
	discover1.announce('find-service', { port: 3456 })

	const discover2 = new MdnsDiscovery()

	discover2.on('service', (service) => {
		t.ok(service.domain === 'local')
		t.ok(service.type.name === 'find-service')

		discover1.destroy()
		discover2.destroy()
	})

	discover2.lookup('find-service')
})

test('handle unannouncing services', async (t) => {
	t.plan(2)

	const discover1 = new MdnsDiscovery()
	discover1.announce('pizza', { port: 3456 })

	const discover2 = new MdnsDiscovery()

	discover2.on('service', (service) => {
		t.ok(service.type.name === 'pizza')
		discover1.unannounce()
	})

	discover2.on('serviceDown', (service) => {
		t.ok(service.type.name === 'pizza')

		discover1.destroy()
		discover2.destroy()
	})

	discover2.lookup('pizza')
})

test('update service txt records', async (t) => {
	t.plan(2)

	const discover1 = new MdnsDiscovery()
	discover1.announce('pizza', { port: 3456, txt: { example: 'pizza' } })

	const discover2 = new MdnsDiscovery()

	discover2.on('service', (service) => {
		t.ok(service.type.name === 'pizza')
		discover1.updateTxt({ example: 'tamale' })
	})

	discover2.on('serviceChanged', (service) => {
		t.ok(service.txt.example === 'tamale')

		discover1.destroy()
		discover2.destroy()
	})

	discover2.lookup('pizza')
})
