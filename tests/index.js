import { test } from 'brittle'

import { MdnsDiscovery } from "../index.js";

test('find services', async (t) => {
	t.plan(2)

	const discover1 = new MdnsDiscovery()
	discover1.announce('pizza', { port: 3456 })

	const discover2 = new MdnsDiscovery()

	discover2.on('service', (service) => {
		t.ok(service.domain === 'local')
		t.ok(service.type.name === 'pizza')

		discover1.destroy()
		discover2.destroy()
	})

	discover2.lookup('pizza')
})

test('handle unannouncing services', async (t) => {
	t.plan(1)

	const discover1 = new MdnsDiscovery()
	discover1.announce('pizza', { port: 3456 })

	setTimeout(() => {
		discover1.unannounce()
	}, 100);

	const discover2 = new MdnsDiscovery()

	discover2.on('service-down', (service) => {
		t.ok(service.type.name === 'pizza')

		discover1.destroy()
		discover2.destroy()
	})

	discover2.lookup('pizza')
})
