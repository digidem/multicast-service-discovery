import net from 'net'
import { MdnsDiscovery } from '../../index.js'

const port = 5342
const discover = new MdnsDiscovery()

const server = net.createServer((socket) => {
  socket.write('welcome to pizzatown')
})

server.listen(port, () => {
  console.log(`listening on port ${port}`)
  discover.announce('mdns-net-example', { port })

  console.log(`
run "node examples/net/lookup.js" in another terminal window to see the service announcement
`)
})
