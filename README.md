# Kroger API Wrapper

## Description

This package is a wrapper for the production environment of Kroger's OpenAPI service. The package exposes simple functions to perform queries on Kroger services.

## Services

The following API services are wrapped by this package:

- Authentication
  - OAuth2 Client Access Token
- Products
  - Product Search
  - Product Details
- Locations
  - Location Search
  - Location Details

## Examples

### Authentication

```
import { getClientToken } from 'kroger-api-wrapper';

const clientBase64 = '<YOUR_KROGER_CREDENTIALS>';
const scope = 'product.compact';

const response = await getClientToken({
    clientBase64,
    scope,
});

const token = response.data.access_token;

return token;
```

### Products

```
import { getProducts } from 'kroger-api-wrapper';

const token = '<YOUR_ACCESS_TOKEN>';
const filters = { limit: 20, term: 'milk' };

const response = await getProducts({
    token,
    filters,
});

const products = response.data;

return products;
```

### Locations

```
import { getLocations } from 'kroger-api-wrapper';

const token = '<YOUR_ACCESS_TOKEN>';
const filters = { limit: 20, zipCode: '12345' };

const response = await getLocations({
    token,
    filters,
});

const locations = response.data;

return locations;
```

## API

### Authentication

#### `getClientToken( { ...parameters } )`

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Paragraph | Text | Title       |

- `clientBase64`
  - `string`
  - Your `client_id:client_secret` base64 encoded.
- `scope`
  - `string`
  - The level of access you are requesting.
  - `"product.compact" | undefined`

---

### Products

#### `getProduct( { ...parameters } )`

| Parameter | Type     | Description                                                                                                                                                     |
| --------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`   | `string` | Your kroger access token.                                                                                                                                       |
| `id`      | `string` | The productId or UPC of a Kroger product.                                                                                                                       |
| `filters` | `object` | An object of key value pairs with the name of the filter as the `key` and the filter value as the `value` (see Kroger API documentation for available filters). |

#### `getProducts( { ...parameters } )`

| Parameter | Type     | Description                                                                                                                                                     |
| --------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`   | `string` | Your kroger access token.                                                                                                                                       |
| `filters` | `object` | An object of key value pairs with the name of the filter as the `key` and the filter value as the `value` (see Kroger API documentation for available filters). |

---

### Locations

#### `getLocation( { ...parameters } )`

| Parameter    | Type     | Description                                      |
| ------------ | -------- | ------------------------------------------------ |
| `token`      | `string` | Your kroger access token.                        |
| `locationId` | `string` | The locationId of a Kroger (or affiliate) store. |

#### `getLocations( { ...parameters } )`

| Parameter | Type     | Description                                                                                                                                                     |
| --------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`   | `string` | Your kroger access token.                                                                                                                                       |
| `filters` | `object` | An object of key value pairs with the name of the filter as the `key` and the filter value as the `value` (see Kroger API documentation for available filters). |
