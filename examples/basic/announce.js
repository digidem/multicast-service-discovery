import { MdnsDiscovery } from "../../index.js";

const discover = new MdnsDiscovery()

await discover.announce('mdns-example')
