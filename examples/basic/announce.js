import { MdnsDiscovery } from "../../index.js";

const discover = new MdnsDiscovery();

discover.announce("mdns-basic-example", { port: 3456 });

setTimeout(() => {
  discover.updateTxt({ example: "tamale" });
}, 5000);
