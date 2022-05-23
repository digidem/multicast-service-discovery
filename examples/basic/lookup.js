import { MdnsDiscovery } from "../../index.js";

const discover = new MdnsDiscovery()

await discover.lookup('mdns-example')

discover.on('service', console.log)
