'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.updateCurrentUser = exports.updateTokenSuccess = exports.updateToken = exports.loginFailure = exports.loginSuccess = exports.login = exports.load = undefined;

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

var load = (exports.load = function load() {
  return { type: types.LOAD };
});
var login = (exports.login = function login() {
  return { type: types.LOGIN };
});
var loginSuccess = (exports.loginSuccess = function loginSuccess() {
  return {
    type: types.LOGIN_SUCCESS
  };
});
var loginFailure = (exports.loginFailure = function loginFailure(refresh_token) {
  return {
    type: types.LOGIN_FAILURE,
    refresh_token: refresh_token
  };
});
var updateToken = (exports.updateToken = function updateToken(refreshToken) {
  return {
    type: types.UPDATE_TOKEN,
    refreshToken: refreshToken
  };
});
var updateTokenSuccess = (exports.updateTokenSuccess = function updateTokenSuccess(access_token) {
  return {
    type: types.UPDATE_TOKEN_SUCCESS,
    access_token: access_token
  };
});
var updateCurrentUser = (exports.updateCurrentUser = function updateCurrentUser(user) {
  return {
    type: types.UPDATE_CURRENT_USER,
    user: user
  };
});
