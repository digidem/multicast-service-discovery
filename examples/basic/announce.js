import { MdnsDiscovery } from '../../index.js'

const discover = new MdnsDiscovery()

const serviceType = discover.createServiceType({
  name: '_example',
  protocol: '_tcp',
})

discover.announce(serviceType, { port: 3456 })

console.log(`
run "node examples/basic/lookup.js" in another terminal window to see the service announcement
`)

setTimeout(() => {
  discover.updateTxt({ example: 'tamale' })
}, 5000)
