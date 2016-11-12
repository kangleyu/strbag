// strbag.js
'use strict'

var _ = require('underscore');
var strbag = [];

/**
 * Register a short string and long string pair
 */
module.exports.register = function(shortStr, longStr) {
  var ret = _.find(strbag, function(el) {
    return el.key == shortStr;
  });
  if (ret == undefined) {
    // if there has no old registred item, then insert a new
    strbag.push({ key: shortStr, value: longStr });
  } else {
    // if it aready exists, then update its value
    ret.value = longStr;
  }
};

/**
 * Resolve a long string from a short string
 */
module.exports.resolve = function(shortStr) {
  var ret = _.find(strbag, function(el) {
    return el.key == shortStr;
  });
  if (ret != undefined) {
    return ret.value;
  }
  return undefined;
};
