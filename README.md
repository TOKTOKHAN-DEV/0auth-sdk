# 0auth-js-sdk


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
import Auth from 'utils/0auth';

...
 useEffect(() => {
    Auth.initialize({ brand: 'test' });
  }, []);
```


