'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports.default = function(store) {
  return function(next) {
    return function(action) {
      var result = next(action);
      console.log(action);
    };
  };
};
