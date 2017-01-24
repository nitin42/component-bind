/**
 * @author Nitin Tulswani <tulswani19@gmail.com>
 */

'use strict';
const support_bind = require('./polyfill');

support_bind(); // polyfill (additional support)

let hooks = ['componentWillMount', 'componentDidMount', 'componentWillUpdate', 'componentDidUpdate',
'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUnmount'];

/**
 * @param {Object} class instance
 */
let binder = (ref) => {
  if (typeof ref !== '' && typeof ref === 'object') {
    // Access all the properties of the constructor class
    for (const i of Object.getOwnPropertyNames(ref.constructor.prototype)) {
      const method = ref[i]; // Class method
      if ((typeof method === 'function' && i !== 'constructor') && (!hooks.includes(method))) {
        ref[i] = method.bind(ref);
      }
    }
  } else {
    throw new Error('Not an oject or the object passed is invalid');
  }
}

module.exports = binder;
