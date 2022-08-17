import net from 'net'
import { MdnsDiscovery } from '../../index.js'

const discover = new MdnsDiscovery()

discover.on('service', (service) => {
  const client = net.createConnection({ port: service.port }, () => {
    console.log(`connected to ${service.name} server!`)
  })

  client.on('data', (data) => {
    console.log('data from service:', data.toString())
    client.end()
  })
})

discover.lookup('mdns-net-example')
