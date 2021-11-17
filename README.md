


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

...
 useEffect(() => {
    Auth.initialize({ brand: 'test' });
  }, []);
```

getOptions

```js
Auth.getOptions()
```

login

```js
Auth.login()
```


