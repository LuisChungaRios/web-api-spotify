'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _ActionTypes = require('../constants/ActionTypes');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var initialState = {
  muted: false
};

exports.default = function(state, action) {
  switch (action.type) {
    case _ActionTypes.FETCH_PLAYING_CONTEXT_SUCCESS:
      return (0, _extends3.default)({}, state, {
        track: action.playingContext.track,
        user: action.playingContext.user,
        position: 0
      });
    case _ActionTypes.PLAY_TRACK_SUCCESS:
      return (0, _extends3.default)({}, state, {
        track: action.track,
        user: action.user,
        position: action.position,
        startTime: new Date()
      });
    case _ActionTypes.QUEUE_ENDED: {
      return initialState;
    }
    case _ActionTypes.MUTE_PLAYBACK:
      return (0, _extends3.default)({}, state, { muted: true });
    case _ActionTypes.UNMUTE_PLAYBACK:
      return (0, _extends3.default)({}, state, { muted: false });
    default:
      return state ? state : initialState;
  }
};
