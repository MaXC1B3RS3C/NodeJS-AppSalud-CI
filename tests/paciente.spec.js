paciente = require('./../paciente.js')

var chai = require('chai');
var assert = chai.assert;

var className = require('../paciente.js');
var addClass = className.addClass;

// The rest of the file remains the same
describe('addClass', function() {
  it('should add class to element', function() {
    var element = { className: '' };

    addClass(element, 'test-class');

    assert.equal(element.className, 'test-class');
  });

  it('should not add a class which already exists');
});