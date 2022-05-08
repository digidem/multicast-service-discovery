import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { Discovery } from "../index.js";

test('find peers', async () => {
	const discover1 = new Discovery()
	await discover1.announce('pizza')

	const discover2 = new Discovery()

	discover2.on('peer', (name, peer) => {
		assert.ok(name === 'pizza')
		assert.ok(peer.domain === 'local')
		assert.ok(peer.name === '_pizza')

		discover1.destroy()
		discover2.destroy()
	})

	await discover2.lookup('pizza')
})

test.run()
