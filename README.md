# set-bind
> Binds all the class methods to their instances in your components.


## Details
* Polyfill for the implementations that do not natively support ***bind()***.
* Not necessarily binds the lifecycle hooks to the class instance.

## Install
```
npm install --save set-bind
```

## Usage
```javascript
const binder = require('set-bind');

class App {
  constructor(name) {
    this.name = name || null,
    this.state = false
    binder(this); // Call here
  };

  component () {
    return `${this.name}`
  }

  error() {
    return `I am not a comp.`;
  }

  update() {
    this.state = true;
    return this.state;
  }
}

const child = new App('App');

const logger = child.component;
console.log(logger()); // Nitin

const error = child.error;
console.log(error()) // I am not a comp.

const updater = child.update("");
console.log(updater); // true
```

## Tests
```
npm run test
```

## Contributing 
Add unit tests for any new or changed functionality.

## License 
ISC

