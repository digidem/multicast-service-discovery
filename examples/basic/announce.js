import { MdnsDiscovery } from "../../index.js";

const discover = new MdnsDiscovery()

discover.announce('mdns-example', { port: 3456 })
