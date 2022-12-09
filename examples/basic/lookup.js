import { MdnsDiscovery } from '../../index.js'

const discover = new MdnsDiscovery()

const serviceType = discover.createServiceType({
  name: '_example',
  protocol: '_tcp',
})

discover.on('service', (service) => {
  console.log('found service:', service)
})

discover.on('serviceChanged', (service) => {
  console.log('service changed:', service)
})

discover.lookup(serviceType)
