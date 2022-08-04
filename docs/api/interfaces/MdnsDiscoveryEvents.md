[API](../README.md) / MdnsDiscoveryEvents

# Interface: MdnsDiscoveryEvents<\>

## Table of contents

### Properties

- [error](MdnsDiscoveryEvents.md#error)
- [service](MdnsDiscoveryEvents.md#service)
- [serviceChanged](MdnsDiscoveryEvents.md#servicechanged)
- [serviceDown](MdnsDiscoveryEvents.md#servicedown)
- [stopAnnouncing](MdnsDiscoveryEvents.md#stopannouncing)
- [stopLookup](MdnsDiscoveryEvents.md#stoplookup)

## Properties

### error

• **error**: (`error`: `Error`) => `void`

#### Type declaration

▸ (`error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

##### Returns

`void`

#### Defined in

[index.js:25](https://github.com/digidem/mdns-sd-discovery/blob/cb2fcc2/index.js#L25)

___

### service

• **service**: (`service`: [`Service`](Service.md)) => `void`

#### Type declaration

▸ (`service`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `service` | [`Service`](Service.md) |

##### Returns

`void`

#### Defined in

[index.js:20](https://github.com/digidem/mdns-sd-discovery/blob/cb2fcc2/index.js#L20)

___

### serviceChanged

• **serviceChanged**: (`serviceChanged`: [`Service`](Service.md)) => `void`

#### Type declaration

▸ (`serviceChanged`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `serviceChanged` | [`Service`](Service.md) |

##### Returns

`void`

#### Defined in

[index.js:22](https://github.com/digidem/mdns-sd-discovery/blob/cb2fcc2/index.js#L22)

___

### serviceDown

• **serviceDown**: (`serviceDown`: [`Service`](Service.md)) => `void`

#### Type declaration

▸ (`serviceDown`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `serviceDown` | [`Service`](Service.md) |

##### Returns

`void`

#### Defined in

[index.js:21](https://github.com/digidem/mdns-sd-discovery/blob/cb2fcc2/index.js#L21)

___

### stopAnnouncing

• **stopAnnouncing**: (`stopAnnouncing`: `void`) => `void`

#### Type declaration

▸ (`stopAnnouncing`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `stopAnnouncing` | `void` |

##### Returns

`void`

#### Defined in

[index.js:23](https://github.com/digidem/mdns-sd-discovery/blob/cb2fcc2/index.js#L23)

___

### stopLookup

• **stopLookup**: (`stopLookup`: `void`) => `void`

#### Type declaration

▸ (`stopLookup`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `stopLookup` | `void` |

##### Returns

`void`

#### Defined in

[index.js:24](https://github.com/digidem/mdns-sd-discovery/blob/cb2fcc2/index.js#L24)
