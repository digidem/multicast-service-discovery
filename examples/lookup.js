import { Discovery } from "../index.js";

const discover = new Discovery()

await discover.lookup('pizza')

console.log('discover.on', discover.on)

discover.on('peer', console.log)
