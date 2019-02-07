'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.transferPlaybackToDeviceError = exports.transferPlaybackToDeviceSuccess = exports.transferPlaybackToDevice = exports.fetchAvailableDevicesError = exports.fetchAvailableDevicesSuccess = exports.fetchAvailableDevices = undefined;

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

var fetchAvailableDevices = (exports.fetchAvailableDevices = function fetchAvailableDevices() {
  return {
    type: types.FETCH_AVAILABLE_DEVICES
  };
});
var fetchAvailableDevicesSuccess = (exports.fetchAvailableDevicesSuccess = function fetchAvailableDevicesSuccess(list) {
  return {
    type: types.FETCH_AVAILABLE_DEVICES_SUCCESS,
    list: list
  };
});
var fetchAvailableDevicesError = (exports.fetchAvailableDevicesError = function fetchAvailableDevicesError(error) {
  return {
    type: types.FETCH_AVAILABLE_DEVICES_ERROR,
    error: error
  };
});

var transferPlaybackToDevice = (exports.transferPlaybackToDevice = function transferPlaybackToDevice(deviceId) {
  return {
    type: types.TRANSFER_PLAYBACK_TO_DEVICE,
    deviceId: deviceId
  };
});
var transferPlaybackToDeviceSuccess = (exports.transferPlaybackToDeviceSuccess = function transferPlaybackToDeviceSuccess(
  list
) {
  return {
    type: types.TRANSFER_PLAYBACK_TO_DEVICE_SUCCESS
  };
});
var transferPlaybackToDeviceError = (exports.transferPlaybackToDeviceError = function transferPlaybackToDeviceError(
  list
) {
  return {
    type: types.TRANSFER_PLAYBACK_TO_DEVICE_ERROR,
    error: error
  };
});
