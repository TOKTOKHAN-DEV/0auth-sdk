


# 0auth-sdk

[![NPM version][npm-image]][npm-url]
[![Coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

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


