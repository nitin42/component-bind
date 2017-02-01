# component-bind
[![Build Status](https://travis-ci.org/nitin42/set-bind.svg?branch=master)](https://travis-ci.org/nitin42/set-bind)

> Binds all the class methods to their instances in your components.


## Details
* Polyfill for the implementations that do not natively support ***bind()***.
* Not necessarily binds the lifecycle hooks to the class instance.

## Install
```
npm install --save cmp-bind
```

## Usage
```javascript
const binder = require('cmp-bind');

class App {
  constructor(name) {
    this.name = name || null,
    binder(this); // Call here
  };

  component () {
    return `${this.name}`
  }

  error() {
    return `I am not a comp.`;
  }
}

const child = new App('App');

const logger = child.component;
console.log(logger()); // Nitin

const error = child.error;
console.log(error()) // I am not a comp.
```

## Tests
```
npm run test
```

## Contributing 
Add unit tests for any new or changed functionality.

## License 
ISC

