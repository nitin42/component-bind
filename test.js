const {expect} = require('chai');
const binder = require('./index');

describe('binder', () => {
  it ('should exist', () => {
    expect(binder).to.exist;
  });

  it('should be a function', () => {
    expect(binder).to.be.a('function');
  });

  it('should throw error when passed no argument', () => {
    expect(binder).to.throw('Not an oject or the object passed is invalid');
  });

  it('should bind the class method', () => {
    class App {
      constructor(name, state) {
        this.name = name || null;
        this.state = state || null;
        binder(this);
      }

      component () {
        return `${this.name}`;
      }
    }

    const child = new App('App');
    const logger = child.component;

    expect(logger()).to.equal('App');
  });
});
