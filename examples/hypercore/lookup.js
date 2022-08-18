import net from 'net'
import Hypercore from 'hypercore'
import ram from 'random-access-memory'
import { MdnsDiscovery } from '../../index.js'

// get the key
const key = process.argv[2]

const discover = new MdnsDiscovery()

// create a hypercore. if a key was passed it'll be used to create a readable core, otherwise it'll be writable
const core = new Hypercore(ram, key)

// wait for the core to be ready
await core.ready()

discover.on('service', (service) => {
  // create a tcp socket to connect to the service
  const socket = net.connect({
    host: service.host,
    port: service.port,
    allowHalfOpen: true,
  })

  // listen for errors on the socket
  socket.on('error', (err) => {
    console.error('tcp error', err)
  })

  // listen for the socket to make a connection
  socket.on('connect', async () => {
    console.log('connection')
    // create a replication stream from the core and pipe the socket stream into the replication stream and back again
    // the socket stream is a remote hypercore replication stream
    socket.pipe(core.replicate(true)).pipe(socket)

    // iterate through the data in a live hypercore stream
    for await (const data of core.createReadStream({ live: true })) {
      console.log('data', data.toString())
    }
  })
})

discover.lookup(core.discoveryKey.toString('hex'))
