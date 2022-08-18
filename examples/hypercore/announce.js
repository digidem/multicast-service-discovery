import net from 'net'
import Hypercore from 'hypercore'
import ram from 'random-access-memory'
import { MdnsDiscovery } from '../../index.js'

const discover = new MdnsDiscovery()

// create a hypercore with a random-access-memory storage
const core = new Hypercore(ram)

// wait for the core to be ready
await core.ready()

// log the core's key to use with the lookup example
console.log(`the hypercore key:


${core.key.toString('hex')}

use it with the lookup example in a new terminal window:

node examples/hypercore/lookup.js ${core.key.toString('hex')}
`)

await core.append(['a', 'b', 'c'])

setTimeout(async () => {
  await core.append(['d', 'e', 'f'])
}, 6000)

// create the server
const server = net.createServer((socket) => {
  // pipe the data from the socket to the core and back again
  socket.pipe(core.replicate(false)).pipe(socket)
})

// listen for errors on the server
server.on('error', (err) => {
  console.log('net server error', err)
})

// start the server
server.listen(async () => {
  const address = server.address()
  // announce the server via mdns
  discover.announce(core.discoveryKey.toString('hex'), { port: address.port })
})
