# Example usage

## Basic usage

This example uses the two files in the [examples/basic](examples/basic) directory.

First run the [announce.js](examples/basic/announce.js) file in the terminal to announce a service:

```shell
node examples/basic/announce.js
```

Then run the [lookup.js](examples/basic/lookup.js) file in another terminal tab or window:

```shell
node examples/basic/lookup.js
```

## Usage with `net.createServer`

This example uses the two files in the [examples/net](examples/net) directory.

Run the [announce.js](examples/net/announce.js) file in the terminal to announce the server:

```shell
node examples/net/announce.js
```

Then run the [lookup.js](examples/net/lookup.js) file in another terminal tab or window:

```shell
node examples/net/lookup.js
```

## Usage with hypercore

This example uses the two files in the [examples/hypercore](examples/hypercore) directory.

Run the [announce.js](examples/hypercore/announce.js) file in the terminal to announce the server:

```shell
node examples/hypercore/announce.js
```

Then run the [lookup.js](examples/hypercore/lookup.js) file in another terminal tab or window:

> You can copy this command with the key from the output of running the announce.js file.

```shell
node examples/hypercore/lookup.js <key>
```
