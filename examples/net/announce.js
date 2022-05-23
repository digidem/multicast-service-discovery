import net from 'net'
import { MdnsDiscovery } from "../../index.js";

const port = 5342
const discover = new MdnsDiscovery()

await discover.announce('mdns-net-example', { port })

const server = net.createServer((socket) => {
	socket.write('welcome to pizzatown')
})

server.listen(port, () => {
	console.log(`listening on port ${port}`)
})
