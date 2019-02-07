'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _ActionTypes = require('../constants/ActionTypes');

var _devicesActions = require('../actions/devicesActions');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

exports.default = function(store) {
  return function(next) {
    return function(action) {
      var result = next(action);
      switch (action.type) {
        case _ActionTypes.FETCH_AVAILABLE_DEVICES: {
          (0, _isomorphicUnfetch2.default)(SPOTIFY_API_BASE + '/me/player/devices', {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + store.getState().session.access_token
            }
          })
            .then(function(r) {
              return r.json();
            })
            .then(function(r) {
              if (r.error) {
                store.dispatch((0, _devicesActions.fetchAvailableDevicesError)(r.error));
              } else {
                store.dispatch((0, _devicesActions.fetchAvailableDevicesSuccess)(r.devices));
              }
            });
          break;
        }
        case _ActionTypes.TRANSFER_PLAYBACK_TO_DEVICE: {
          (0, _isomorphicUnfetch2.default)(SPOTIFY_API_BASE + '/me/player', {
            method: 'PUT',
            headers: {
              Authorization: 'Bearer ' + store.getState().session.access_token
            },
            body: (0, _stringify2.default)({
              device_ids: [action.deviceId]
            })
          })
            .then(function(r) {
              return r.json();
            })
            .then(function(r) {
              if (r.error) {
                store.dispatch((0, _devicesActions.transferPlaybackToDeviceError)(r.error));
              } else {
                store.dispatch((0, _devicesActions.transferPlaybackToDeviceSuccess)());
                store.dispatch((0, _devicesActions.fetchAvailableDevices)());
              }
            });
          break;
        }

        default:
          break;
      }

      return result;
    };
  };
};
