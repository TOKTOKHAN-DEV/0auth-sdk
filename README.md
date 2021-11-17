


# 0auth-sdk

[![NPM version](https://img.shields.io/npm/v/0auth-sdk)](https://www.npmjs.com/package/0auth-sdk)
[![Type](https://img.shields.io/npm/types/0auth-sdk)](https://www.npmjs.com/package/0auth-sdk)
[![License](https://img.shields.io/npm/l/0auth-sdk)](https://www.npmjs.com/package/0auth-sdk)
[![Downloads](https://img.shields.io/npm/dm/0auth-sdk)](https://www.npmjs.com/package/0auth-sdk)

Client Side JavaScript toolkit for 0Auth.

## Installation

With [npm](https://www.npmjs.com/):

```bash
npm install 0auth-sdk
```

With [yarn](https://yarnpkg.com/):

```bash
yarn add 0auth-sdk
```

## Usage

### With react

Initializing 

```js
import Auth from '0auth-sdk';
Auth.initialize({ 
  brand: 'test',
  clientId: 'ZA-A6FG93C817'
});
```

options | type | require | description
--------|--------|----------------------------|-----
brand | string | true | set login page link as [brand].0auth.kr
clientId | string | true | verify user

getOptions

```js
Auth.getOptions()
```

login

```js
// if initialized, push to 0auth login page
Auth.login()
```

getProfile

```js
// if access token is verified
Auth.getProfile()
```


