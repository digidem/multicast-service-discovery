import { test } from 'brittle'

import { MdnsDiscovery } from "../index.js";

test('find services', async (t) => {
	t.plan(3)

	const discover1 = new MdnsDiscovery()
	await discover1.announce('pizza')

	const discover2 = new MdnsDiscovery()

	discover2.on('service', (name, service) => {
		t.ok(name === 'pizza')
		t.ok(service.domain === 'local')
		t.ok(service.name === '_pizza')

		discover1.destroy()
		discover2.destroy()
	})

	await discover2.lookup('pizza')
})
