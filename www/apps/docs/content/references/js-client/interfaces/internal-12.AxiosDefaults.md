---
displayed_sidebar: jsClientSidebar
---

# Interface: AxiosDefaults<D\>

[internal](../modules/internal-12.md).AxiosDefaults

Construct a type with the properties of T except for those in type K.

## Type parameters

| Name | Type |
| :------ | :------ |
| `D` | `any` |

## Hierarchy

- [`Omit`](../modules/internal-1.md#omit)<`AxiosRequestConfig`<`D`\>, ``"headers"``\>

  ↳ **`AxiosDefaults`**

## Properties

### adapter

• `Optional` **adapter**: [`AxiosAdapter`](internal-12.AxiosAdapter.md)

#### Inherited from

Omit.adapter

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:75

___

### auth

• `Optional` **auth**: [`AxiosBasicCredentials`](internal-12.AxiosBasicCredentials.md)

#### Inherited from

Omit.auth

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:76

___

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

Omit.baseURL

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:65

___

### cancelToken

• `Optional` **cancelToken**: [`CancelToken`](internal-12.CancelToken.md)

#### Inherited from

Omit.cancelToken

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:90

___

### data

• `Optional` **data**: `D`

#### Inherited from

Omit.data

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:71

___

### decompress

• `Optional` **decompress**: `boolean`

#### Inherited from

Omit.decompress

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:91

___

### headers

• **headers**: [`HeadersDefaults`](internal-12.HeadersDefaults.md)

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:112

___

### httpAgent

• `Optional` **httpAgent**: `any`

#### Inherited from

Omit.httpAgent

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:87

___

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Inherited from

Omit.httpsAgent

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:88

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Inherited from

Omit.insecureHTTPParser

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:94

___

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

Omit.maxBodyLength

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:84

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Inherited from

Omit.maxContentLength

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:82

___

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Inherited from

Omit.maxRedirects

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:85

___

### method

• `Optional` **method**: [`Method`](../modules/internal-12.md#method)

#### Inherited from

Omit.method

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:64

___

### onDownloadProgress

• `Optional` **onDownloadProgress**: (`progressEvent`: `any`) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `any` |

##### Returns

`void`

#### Inherited from

Omit.onDownloadProgress

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:81

___

### onUploadProgress

• `Optional` **onUploadProgress**: (`progressEvent`: `any`) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `any` |

##### Returns

`void`

#### Inherited from

Omit.onUploadProgress

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:80

___

### params

• `Optional` **params**: `any`

#### Inherited from

Omit.params

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:69

___

### paramsSerializer

• `Optional` **paramsSerializer**: (`params`: `any`) => `string`

#### Type declaration

▸ (`params`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

##### Returns

`string`

#### Inherited from

Omit.paramsSerializer

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:70

___

### proxy

• `Optional` **proxy**: ``false`` \| [`AxiosProxyConfig`](internal-12.AxiosProxyConfig.md)

#### Inherited from

Omit.proxy

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:89

___

### raxConfig

• `Optional` **raxConfig**: [`RetryConfig`](internal-12.RetryConfig.md)

#### Inherited from

Omit.raxConfig

#### Defined in

packages/medusa-js/node_modules/retry-axios/dist/src/index.d.ts:89

___

### responseType

• `Optional` **responseType**: [`ResponseType`](../modules/internal-12.md#responsetype)

#### Inherited from

Omit.responseType

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:77

___

### signal

• `Optional` **signal**: `AbortSignal`

#### Inherited from

Omit.signal

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:93

___

### socketPath

• `Optional` **socketPath**: ``null`` \| `string`

#### Inherited from

Omit.socketPath

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:86

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

Omit.timeout

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:72

___

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Inherited from

Omit.timeoutErrorMessage

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:73

___

### transformRequest

• `Optional` **transformRequest**: [`AxiosRequestTransformer`](internal-12.AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](internal-12.AxiosRequestTransformer.md)[]

#### Inherited from

Omit.transformRequest

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:66

___

### transformResponse

• `Optional` **transformResponse**: [`AxiosResponseTransformer`](internal-12.AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](internal-12.AxiosResponseTransformer.md)[]

#### Inherited from

Omit.transformResponse

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:67

___

### transitional

• `Optional` **transitional**: [`TransitionalOptions`](internal-12.TransitionalOptions.md)

#### Inherited from

Omit.transitional

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:92

___

### url

• `Optional` **url**: `string`

#### Inherited from

Omit.url

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:63

___

### validateStatus

• `Optional` **validateStatus**: ``null`` \| (`status`: `number`) => `boolean`

#### Inherited from

Omit.validateStatus

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:83

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Inherited from

Omit.withCredentials

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:74

___

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Inherited from

Omit.xsrfCookieName

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:78

___

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Inherited from

Omit.xsrfHeaderName

#### Defined in

packages/medusa-js/node_modules/axios/index.d.ts:79
