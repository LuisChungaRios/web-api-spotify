'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.fetchUsers = exports.updateUsers = undefined;

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _app = require('../config/app');

var _app2 = _interopRequireDefault(_app);

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var updateUsers = (exports.updateUsers = function updateUsers(users) {
  return { type: types.UPDATE_USERS, data: users };
});

var fetchUsers = (exports.fetchUsers = function fetchUsers() {
  return function(dispatch) {
    return (0, _isomorphicUnfetch2.default)(_app2.default.HOST + '/api/users')
      .then(function(res) {
        return res.json();
      })
      .then(function(res) {
        return dispatch(updateUsers(res));
      });
  };
});
