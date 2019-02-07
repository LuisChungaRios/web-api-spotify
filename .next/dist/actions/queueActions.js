'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.fetchQueue = exports.queueRemoveTrack = exports.queueEnded = exports.updateQueue = exports.queueTrack = undefined;

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

var queueTrack = (exports.queueTrack = function queueTrack(id) {
  return { type: types.QUEUE_TRACK, id: id };
});
var updateQueue = (exports.updateQueue = function updateQueue(queue) {
  return { type: types.UPDATE_QUEUE, data: queue };
});
var queueEnded = (exports.queueEnded = function queueEnded() {
  return { type: types.QUEUE_ENDED };
});
var queueRemoveTrack = (exports.queueRemoveTrack = function queueRemoveTrack(id) {
  return {
    type: types.QUEUE_REMOVE_TRACK,
    id: id
  };
});

var fetchQueue = (exports.fetchQueue = function fetchQueue() {
  return function(dispatch) {
    return (0, _isomorphicUnfetch2.default)(_app2.default.HOST + '/api/queue')
      .then(function(res) {
        return res.json();
      })
      .then(function(res) {
        return dispatch(updateQueue(res));
      });
  };
});
