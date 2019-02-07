'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.fetchPlayingContext = exports.fetchPlayingContextSuccess = exports.unmutePlayback = exports.mutePlayback = exports.playTrackSuccess = exports.playTrack = undefined;

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

// playback
var playTrack = (exports.playTrack = function playTrack(track, user, position) {
  return {
    type: types.PLAY_TRACK,
    track: track,
    user: user,
    position: position
  };
});
var playTrackSuccess = (exports.playTrackSuccess = function playTrackSuccess(track, user, position) {
  return {
    type: types.PLAY_TRACK_SUCCESS,
    track: track,
    user: user,
    position: position
  };
});

var mutePlayback = (exports.mutePlayback = function mutePlayback() {
  return { type: types.MUTE_PLAYBACK };
});
var unmutePlayback = (exports.unmutePlayback = function unmutePlayback() {
  return { type: types.UNMUTE_PLAYBACK };
});

var fetchPlayingContextSuccess = (exports.fetchPlayingContextSuccess = function fetchPlayingContextSuccess(
  playingContext
) {
  return {
    type: types.FETCH_PLAYING_CONTEXT_SUCCESS,
    playingContext: playingContext
  };
});

var fetchPlayingContext = (exports.fetchPlayingContext = function fetchPlayingContext() {
  return function(dispatch) {
    return (0, _isomorphicUnfetch2.default)(_app2.default.HOST + '/api/now-playing')
      .then(function(res) {
        return res.json();
      })
      .then(function(res) {
        return dispatch(fetchPlayingContextSuccess(res));
      });
  };
});
