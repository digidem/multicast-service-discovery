import { Discovery } from "../index.js";

const discover = new Discovery()

await discover.lookup('pizza')

discover.on('peer', console.log)
