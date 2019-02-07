'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getDevices = exports.getIsFetching = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _ActionTypes = require('../constants/ActionTypes');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var initialState = {
  isFetching: false,
  data: []
};

exports.default = function(state, action) {
  switch (action.type) {
    case _ActionTypes.FETCH_AVAILABLE_DEVICES:
      return (0, _extends3.default)({}, state, {
        isFetching: true
      });
    case _ActionTypes.FETCH_AVAILABLE_DEVICES_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isFetching: false,
        data: action.list
      });
    case _ActionTypes.FETCH_AVAILABLE_DEVICES_ERROR:
      return initialState;
    default:
      return state ? state : initialState;
  }
};

var getIsFetching = (exports.getIsFetching = function getIsFetching(state) {
  return state.isFetching;
});

var getDevices = (exports.getDevices = function getDevices(state) {
  return state.data;
});
