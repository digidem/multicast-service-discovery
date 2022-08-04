[API](../README.md) / MdnsDiscovery

# Class: MdnsDiscovery

Find services through mdns service discovery

## Hierarchy

- `TypedEmitter`

  ↳ **`MdnsDiscovery`**

## Table of contents

### Constructors

- [constructor](MdnsDiscovery.md#constructor)

### Methods

- [announce](MdnsDiscovery.md#announce)
- [createServiceType](MdnsDiscovery.md#createservicetype)
- [destroy](MdnsDiscovery.md#destroy)
- [lookup](MdnsDiscovery.md#lookup)
- [stopLookup](MdnsDiscovery.md#stoplookup)
- [unannounce](MdnsDiscovery.md#unannounce)
- [updateTxt](MdnsDiscovery.md#updatetxt)

## Constructors

### constructor

• **new MdnsDiscovery**()

#### Inherited from

TypedEmitter.constructor

## Methods

### announce

▸ **announce**(`serviceType`, `options`): `void`

Announce a service with a name and port

#### Parameters

| Name          | Type                                                      |
| :------------ | :-------------------------------------------------------- |
| `serviceType` | `string` \| [`ServiceType`](../interfaces/ServiceType.md) |
| `options`     | [`Service`](../interfaces/Service.md)                     |

#### Returns

`void`

#### Defined in

[index.js:103](https://github.com/digidem/mdns-sd-discovery/blob/0b6321d/index.js#L103)

---

### createServiceType

▸ **createServiceType**(`options`): `ServiceType`

#### Parameters

| Name      | Type                                          |
| :-------- | :-------------------------------------------- |
| `options` | [`ServiceType`](../interfaces/ServiceType.md) |

#### Returns

`ServiceType`

#### Defined in

[index.js:138](https://github.com/digidem/mdns-sd-discovery/blob/0b6321d/index.js#L138)

---

### destroy

▸ **destroy**(): `void`

Unannounce and/or stop lookup of a service

#### Returns

`void`

#### Defined in

[index.js:162](https://github.com/digidem/mdns-sd-discovery/blob/0b6321d/index.js#L162)

---

### lookup

▸ **lookup**(`serviceType`): `Promise`<`void`\>

Lookup a service by its name

#### Parameters

| Name          | Type                                                      |
| :------------ | :-------------------------------------------------------- |
| `serviceType` | `string` \| [`ServiceType`](../interfaces/ServiceType.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[index.js:47](https://github.com/digidem/mdns-sd-discovery/blob/0b6321d/index.js#L47)

---

### stopLookup

▸ **stopLookup**(): `Promise`<`void`\>

Stop looking up a service

#### Returns

`Promise`<`void`\>

#### Defined in

[index.js:83](https://github.com/digidem/mdns-sd-discovery/blob/0b6321d/index.js#L83)

---

### unannounce

▸ **unannounce**(`immediate?`): `void`

Stop announcing the service

#### Parameters

| Name         | Type      | Default value | Description                     |
| :----------- | :-------- | :------------ | :------------------------------ |
| `immediate?` | `boolean` | `false`       | if true, unannounce immediately |

#### Returns

`void`

#### Defined in

[index.js:146](https://github.com/digidem/mdns-sd-discovery/blob/0b6321d/index.js#L146)

---

### updateTxt

▸ **updateTxt**(`txt`): `void`

#### Parameters

| Name  | Type     | Description                                                                                                                                                                                                                                          |
| :---- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `txt` | `Object` | object with keys and values of txt records. keys must be less than 9 characters, values must be a string, buffer, number, or boolean. More details on validation restrictions: https://gitlab.com/gravitysoftware/dnssd.js/-/tree/master#validations |

#### Returns

`void`

#### Defined in

[index.js:131](https://github.com/digidem/mdns-sd-discovery/blob/0b6321d/index.js#L131)
