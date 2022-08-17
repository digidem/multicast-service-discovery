# multicast-service-discovery

Announce and look up services on a local network using mdns.

## Install

```shell
npm i multicast-service-discovery
```

## API docs

See the [generated API docs](docs/api).

## Example usage

See the [examples directory](examples/) for a very basic example as well as usage with `net.createServer` and [hypercore](https://github.com/hypercore-protocol/hypercore-next).

### Announce a service

```js
import { MdnsDiscovery } from 'multicast-service-discovery'

const discover = new MdnsDiscovery()

discover.announce('mdns-basic-example', { port: 3456 })
```

### Look up a service

```js
import { MdnsDiscovery } from 'multicast-service-discovery'

const discover = new MdnsDiscovery()

discover.on('service', (service) => {
  console.log('found service:', service)
})

discover.lookup('mdns-basic-example')
```

### Troubleshooting

If you see `Error: Timed out getting default route` when using with nodejs versions >=18.0.0 to <18.4.0, upgrade to at least 18.4.0 to resolve this.

## License

[ISC](LICENSE.md)
