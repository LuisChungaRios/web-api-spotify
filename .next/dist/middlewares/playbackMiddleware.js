'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _ActionTypes = require('../constants/ActionTypes');

var _playbackActions = require('../actions/playbackActions');

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
        case _ActionTypes.PLAY_TRACK: {
          if (process.browser && !store.getState().playback.muted) {
            (0, _isomorphicUnfetch2.default)(SPOTIFY_API_BASE + '/me/player/play', {
              method: 'PUT',
              headers: {
                Authorization: 'Bearer ' + store.getState().session.access_token
              },
              body: (0, _stringify2.default)({
                uris: ['spotify:track:' + action.track.id]
              })
            }).then(function() {
              if (action.position) {
                (0, _isomorphicUnfetch2.default)(SPOTIFY_API_BASE + '/me/player/seek?position_ms=' + action.position, {
                  method: 'PUT',
                  headers: {
                    Authorization: 'Bearer ' + store.getState().session.access_token
                  }
                }).then(function() {
                  store.dispatch((0, _playbackActions.playTrackSuccess)(action.track, action.user, action.position));
                });
              } else {
                store.dispatch((0, _playbackActions.playTrackSuccess)(action.track, action.user));
              }
            });
          }
          break;
        }
        case _ActionTypes.UNMUTE_PLAYBACK: {
          var _store$getState$playb = store.getState().playback,
            track = _store$getState$playb.track,
            user = _store$getState$playb.user,
            position = _store$getState$playb.position,
            startTime = _store$getState$playb.startTime;

          var currentPosition = Date.now() - startTime + position;
          store.dispatch((0, _playbackActions.playTrack)(track, user, currentPosition));
          break;
        }
        default:
          break;
      }

      return result;
    };
  };
};
