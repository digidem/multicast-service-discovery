[API](../README.md) / [Exports](../modules.md) / MdnsDiscovery

# Class: MdnsDiscovery

Find services through mdns service discovery

## Hierarchy

- `TypedEmitter`

  ↳ **`MdnsDiscovery`**

## Table of contents

### Constructors

- [constructor](MdnsDiscovery.md#constructor)

### Properties

- [#advertise](MdnsDiscovery.md##advertise)
- [#browse](MdnsDiscovery.md##browse)
- [defaultMaxListeners](MdnsDiscovery.md#defaultmaxlisteners)

### Methods

- [addListener](MdnsDiscovery.md#addlistener)
- [announce](MdnsDiscovery.md#announce)
- [createServiceType](MdnsDiscovery.md#createservicetype)
- [destroy](MdnsDiscovery.md#destroy)
- [emit](MdnsDiscovery.md#emit)
- [eventNames](MdnsDiscovery.md#eventnames)
- [getMaxListeners](MdnsDiscovery.md#getmaxlisteners)
- [listenerCount](MdnsDiscovery.md#listenercount)
- [listeners](MdnsDiscovery.md#listeners)
- [lookup](MdnsDiscovery.md#lookup)
- [off](MdnsDiscovery.md#off)
- [on](MdnsDiscovery.md#on)
- [once](MdnsDiscovery.md#once)
- [prependListener](MdnsDiscovery.md#prependlistener)
- [prependOnceListener](MdnsDiscovery.md#prependoncelistener)
- [rawListeners](MdnsDiscovery.md#rawlisteners)
- [removeAllListeners](MdnsDiscovery.md#removealllisteners)
- [removeListener](MdnsDiscovery.md#removelistener)
- [setMaxListeners](MdnsDiscovery.md#setmaxlisteners)
- [stopLookup](MdnsDiscovery.md#stoplookup)
- [unannounce](MdnsDiscovery.md#unannounce)
- [updateTxt](MdnsDiscovery.md#updatetxt)

## Constructors

### constructor

• **new MdnsDiscovery**()

#### Inherited from

TypedEmitter.constructor

## Properties

### #advertise

• `Private` **#advertise**: `undefined` \| `Advertisement`

#### Defined in

[index.js:36](https://github.com/digidem/mdns-sd-discovery/blob/bc3bd7f/index.js#L36)

___

### #browse

• `Private` **#browse**: `undefined` \| `Browser`

#### Defined in

[index.js:41](https://github.com/digidem/mdns-sd-discovery/blob/bc3bd7f/index.js#L41)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

TypedEmitter.defaultMaxListeners

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:10

## Methods

### addListener

▸ **addListener**<`U`\>(`event`, `listener`): [`MdnsDiscovery`](MdnsDiscovery.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md)[`U`] |

#### Returns

[`MdnsDiscovery`](MdnsDiscovery.md)

#### Inherited from

TypedEmitter.addListener

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:11

___

### announce

▸ **announce**(`serviceType`, `options`): `void`

Announce a service with a name and port

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceType` | `string` \| [`ServiceType`](../interfaces/ServiceType.md) |
| `options` | [`Service`](../interfaces/Service.md) |

#### Returns

`void`

#### Defined in

[index.js:103](https://github.com/digidem/mdns-sd-discovery/blob/bc3bd7f/index.js#L103)

___

### createServiceType

▸ **createServiceType**(`options`): `ServiceType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Service`](../interfaces/Service.md) |

#### Returns

`ServiceType`

#### Defined in

[index.js:138](https://github.com/digidem/mdns-sd-discovery/blob/bc3bd7f/index.js#L138)

___

### destroy

▸ **destroy**(): `void`

Unannounce and/or stop lookup of a service

#### Returns

`void`

#### Defined in

[index.js:162](https://github.com/digidem/mdns-sd-discovery/blob/bc3bd7f/index.js#L162)

___

### emit

▸ **emit**<`U`\>(`event`, ...`args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `...args` | `Parameters`<[`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md)[`U`]\> |

#### Returns

`boolean`

#### Inherited from

TypedEmitter.emit

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:19

___

### eventNames

▸ **eventNames**<`U`\>(): `U`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md) |

#### Returns

`U`[]

#### Inherited from

TypedEmitter.eventNames

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:20

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

TypedEmitter.getMaxListeners

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:24

___

### listenerCount

▸ **listenerCount**(`type`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | keyof [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md) |

#### Returns

`number`

#### Inherited from

TypedEmitter.listenerCount

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:21

___

### listeners

▸ **listeners**<`U`\>(`type`): [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md)[`U`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `U` |

#### Returns

[`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md)[`U`][]

#### Inherited from

TypedEmitter.listeners

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:22

___

### lookup

▸ **lookup**(`serviceType`): `Promise`<`void`\>

Lookup a service by its name

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceType` | `string` \| [`ServiceType`](../interfaces/ServiceType.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[index.js:47](https://github.com/digidem/mdns-sd-discovery/blob/bc3bd7f/index.js#L47)

___

### off

▸ **off**<`U`\>(`event`, `listener`): [`MdnsDiscovery`](MdnsDiscovery.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md)[`U`] |

#### Returns

[`MdnsDiscovery`](MdnsDiscovery.md)

#### Inherited from

TypedEmitter.off

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:18

___

### on

▸ **on**<`U`\>(`event`, `listener`): [`MdnsDiscovery`](MdnsDiscovery.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md)[`U`] |

#### Returns

[`MdnsDiscovery`](MdnsDiscovery.md)

#### Inherited from

TypedEmitter.on

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:17

___

### once

▸ **once**<`U`\>(`event`, `listener`): [`MdnsDiscovery`](MdnsDiscovery.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md)[`U`] |

#### Returns

[`MdnsDiscovery`](MdnsDiscovery.md)

#### Inherited from

TypedEmitter.once

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:16

___

### prependListener

▸ **prependListener**<`U`\>(`event`, `listener`): [`MdnsDiscovery`](MdnsDiscovery.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md)[`U`] |

#### Returns

[`MdnsDiscovery`](MdnsDiscovery.md)

#### Inherited from

TypedEmitter.prependListener

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:12

___

### prependOnceListener

▸ **prependOnceListener**<`U`\>(`event`, `listener`): [`MdnsDiscovery`](MdnsDiscovery.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md)[`U`] |

#### Returns

[`MdnsDiscovery`](MdnsDiscovery.md)

#### Inherited from

TypedEmitter.prependOnceListener

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:13

___

### rawListeners

▸ **rawListeners**<`U`\>(`type`): [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md)[`U`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `U` |

#### Returns

[`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md)[`U`][]

#### Inherited from

TypedEmitter.rawListeners

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:23

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`MdnsDiscovery`](MdnsDiscovery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | keyof [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md) |

#### Returns

[`MdnsDiscovery`](MdnsDiscovery.md)

#### Inherited from

TypedEmitter.removeAllListeners

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:15

___

### removeListener

▸ **removeListener**<`U`\>(`event`, `listener`): [`MdnsDiscovery`](MdnsDiscovery.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`MdnsDiscoveryEvents`](../interfaces/MdnsDiscoveryEvents.md)[`U`] |

#### Returns

[`MdnsDiscovery`](MdnsDiscovery.md)

#### Inherited from

TypedEmitter.removeListener

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:14

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`MdnsDiscovery`](MdnsDiscovery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`MdnsDiscovery`](MdnsDiscovery.md)

#### Inherited from

TypedEmitter.setMaxListeners

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:25

___

### stopLookup

▸ **stopLookup**(): `Promise`<`void`\>

Stop looking up a service

#### Returns

`Promise`<`void`\>

#### Defined in

[index.js:83](https://github.com/digidem/mdns-sd-discovery/blob/bc3bd7f/index.js#L83)

___

### unannounce

▸ **unannounce**(`immediate?`): `void`

Stop announcing the service

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `immediate?` | `boolean` | `false` | if true, unannounce immediately |

#### Returns

`void`

#### Defined in

[index.js:146](https://github.com/digidem/mdns-sd-discovery/blob/bc3bd7f/index.js#L146)

___

### updateTxt

▸ **updateTxt**(`txt`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txt` | `Object` | object with keys and values of txt records. keys must be less than 9 characters, values must be a string, buffer, number, or boolean. More details on validation restrictions: https://gitlab.com/gravitysoftware/dnssd.js/-/tree/master#validations |

#### Returns

`void`

#### Defined in

[index.js:131](https://github.com/digidem/mdns-sd-discovery/blob/bc3bd7f/index.js#L131)
