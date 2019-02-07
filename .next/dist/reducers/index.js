'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getIsFetchingDevices = exports.getDevices = exports.reducers = undefined;

var _redux = require('redux');

var _queueReducer = require('../reducers/queueReducer');

var _queueReducer2 = _interopRequireDefault(_queueReducer);

var _sessionReducer = require('../reducers/sessionReducer');

var _sessionReducer2 = _interopRequireDefault(_sessionReducer);

var _playbackReducer = require('../reducers/playbackReducer');

var _playbackReducer2 = _interopRequireDefault(_playbackReducer);

var _devicesReducer = require('../reducers/devicesReducer');

var fromDevices = _interopRequireWildcard(_devicesReducer);

var _usersReducer = require('../reducers/usersReducer');

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _searchReducer = require('../reducers/searchReducer');

var _searchReducer2 = _interopRequireDefault(_searchReducer);

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

var reducers = (exports.reducers = function reducers() {
  return (0, _redux.combineReducers)({
    queue: _queueReducer2.default,
    playback: _playbackReducer2.default,
    session: _sessionReducer2.default,
    users: _usersReducer2.default,
    search: _searchReducer2.default,
    devices: fromDevices.default
  });
});

var getDevices = (exports.getDevices = function getDevices(state) {
  return fromDevices.getDevices(state.devices);
});

var getIsFetchingDevices = (exports.getIsFetchingDevices = function getIsFetchingDevices(state) {
  return fromDevices.getIsFetching(state.devices);
});
