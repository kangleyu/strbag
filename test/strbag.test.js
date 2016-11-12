'use strict'

var expect = require('chai').expect;
var strbag = require('../strbag');

describe('#strbag', function() {
  it('should allow to register and resolve for new string pair', function() {
    strbag.register("key1", "value-1");
    var ret = strbag.resolve("key1");
    expect(ret).to.equal("value-1");
  });

  it('should override old value for register existing key', function() {
    strbag.register("key1", "value-1");
    strbag.register("key1", "value-1-updated");
    var ret = strbag.resolve("key1");
    expect(ret).to.equal("value-1-updated");
  });
});