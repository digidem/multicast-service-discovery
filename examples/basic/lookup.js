import { MdnsDiscovery } from "../../index.js";

const discover = new MdnsDiscovery()

discover.on('service', console.log)

discover.lookup('mdns-example')
