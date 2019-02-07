'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.socketMiddleware = socketMiddleware;

exports.default = function(store) {
  socket = _socket2.default.connect(_app2.default.HOST);

  socket.on('update queue', function(data) {
    store.dispatch((0, _queueActions.updateQueue)(data));
  });

  socket.on('queue ended', function() {
    store.dispatch((0, _queueActions.queueEnded)());
  });

  socket.on('update now playing', function(track, user, isPlaying) {
    // we should also set repeat to false!
    store.dispatch((0, _playbackActions.updateNowPlaying)(track, user, isPlaying));
  });

  socket.on('play track', function(track, user, position) {
    // we should also set repeat to false!
    store.dispatch((0, _playbackActions.playTrack)(track, user, position));
  });

  socket.on('update users', function(data) {
    store.dispatch((0, _usersActions.updateUsers)(data));
  });

  // todo: manage end song, end queue
};

var _ActionTypes = require('../constants/ActionTypes');

var _usersActions = require('../actions/usersActions');

var _queueActions = require('../actions/queueActions');

var _playbackActions = require('../actions/playbackActions');

var _app = require('../config/app');

var _app2 = _interopRequireDefault(_app);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var socket = null;

var getIdFromTrackString = function getIdFromTrackString() {
  var trackString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var matches = trackString.match(/^https:\/\/open\.spotify\.com\/track\/(.*)/);
  if (matches) {
    return matches[1];
  }

  matches = trackString.match(/^https:\/\/play\.spotify\.com\/track\/(.*)/);
  if (matches) {
    return matches[1];
  }

  matches = trackString.match(/^spotify:track:(.*)/);
  if (matches) {
    return matches[1];
  }

  return null;
};

function socketMiddleware(store) {
  return function(next) {
    return function(action) {
      var result = next(action);

      if (socket) {
        switch (action.type) {
          case _ActionTypes.QUEUE_TRACK: {
            var trackId = getIdFromTrackString(action.id);
            if (trackId === null) {
              trackId = action.id;
            }
            socket.emit('queue track', trackId);
            break;
          }
          case _ActionTypes.QUEUE_REMOVE_TRACK: {
            socket.emit('remove track', action.id);
            break;
          }
          case _ActionTypes.LOGIN_SUCCESS:
            var user = store.getState().session.user;
            socket.emit('user login', user);
            break;
          case _ActionTypes.VOTE_UP:
            socket.emit('vote up', action.id);
            break;
          default:
            break;
        }
      }

      return result;
    };
  };
}
