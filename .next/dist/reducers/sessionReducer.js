'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _ActionTypes = require('../constants/ActionTypes');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var initialState = {
  refresh_token: null, //'localStorage' in window && localStorage.getItem('refreshToken'),
  user: null
};

exports.default = function(state, action) {
  switch (action.type) {
    case _ActionTypes.LOAD:
      if (process.browser) {
        var refreshToken = localStorage.getItem('refreshToken');
        var accessToken = localStorage.getItem('accessToken');
        var expiresIn = localStorage.getItem('expiresIn');
        return (0, _assign2.default)({}, state, {
          access_token: accessToken,
          refresh_token: refreshToken,
          expires_in: expiresIn ? +expiresIn : null
        });
      } else {
        return state;
      }
    case _ActionTypes.UPDATE_TOKEN_SUCCESS:
      return (0, _assign2.default)({}, state, { access_token: action.access_token });
    case _ActionTypes.LOGIN_SUCCESS:
      if (action.refresh_token) {
        return (0, _assign2.default)({}, state, {
          refresh_token: action.refresh_token
        });
      }
      return state;
    case _ActionTypes.UPDATE_CURRENT_USER:
      return (0, _assign2.default)({}, state, { user: action.user });
    default:
      return state ? state : initialState;
  }
};
