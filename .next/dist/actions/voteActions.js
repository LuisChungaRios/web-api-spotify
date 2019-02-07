'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.voteUpSuccess = exports.voteUp = undefined;

var _ActionTypes = require('../constants/ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

var voteUp = (exports.voteUp = function voteUp(id) {
  return {
    type: types.VOTE_UP,
    id: id
  };
});

var voteUpSuccess = (exports.voteUpSuccess = function voteUpSuccess() {
  return {
    type: types.VOTE_UP_SUCCESS
  };
});
