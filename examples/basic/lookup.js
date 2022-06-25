import { MdnsDiscovery } from "../../index.js";

const discover = new MdnsDiscovery();

discover.on("service", (service) => {
  console.log("found service:", service);
});

discover.lookup("mdns-basic-example");

discover.on("serviceChanged", (service) => {
  console.log("service changed:", service);
});
