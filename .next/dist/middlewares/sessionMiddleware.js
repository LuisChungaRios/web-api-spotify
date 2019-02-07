'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _ActionTypes = require('../constants/ActionTypes');

var _sessionActions = require('../actions/sessionActions');

var _app = require('../config/app');

var Config = _interopRequireWildcard(_app);

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

var SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

var getCurrentUser = function getCurrentUser() {
  return function(dispatch, getState) {
    return (0, _isomorphicUnfetch2.default)(SPOTIFY_API_BASE + '/me', {
      headers: {
        Authorization: 'Bearer ' + getState().session.access_token
      }
    })
      .then(function(res) {
        return res.json();
      })
      .then(function(res) {
        dispatch((0, _sessionActions.updateCurrentUser)(res));
      });
  };
};

var updateToken = function updateToken() {
  return function(dispatch, getState) {
    return (0, _isomorphicUnfetch2.default)(Config.HOST + '/auth/token', {
      method: 'POST',
      body: (0, _stringify2.default)({
        refresh_token: getState().session.refresh_token
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(function(res) {
        return res.json();
      })
      .then(function(res) {
        console.log(res);
        dispatch((0, _sessionActions.updateTokenSuccess)(res.access_token));
      });
  };
};

// todo: set a timer, both client-side and server-side

exports.default = function(store) {
  return function(next) {
    return function(action) {
      var result = next(action);
      switch (action.type) {
        case _ActionTypes.LOAD: {
          var session = store.getState().session;
          var expiresIn = session.expires_in;
          var needsToUpdate = !expiresIn || expiresIn < Date.now() - 10 * 60 * 1000;
          if (needsToUpdate) {
            console.log('sessionMiddleware > needs to update access token');
            var refreshToken = session.refresh_token;
            if (refreshToken) {
              console.log('sessionMiddleware > using refresh token');
              store
                .dispatch(updateToken())
                .then(function() {
                  return store.dispatch(getCurrentUser());
                })
                .then(function() {
                  store.dispatch((0, _sessionActions.loginSuccess)());
                });
            }
          } else {
            console.log('sessionMiddleware > no need to update access token');
            store.dispatch(getCurrentUser()).then(function() {
              store.dispatch((0, _sessionActions.loginSuccess)());
            });
          }
          break;
        }
        case _ActionTypes.LOGIN: {
          var getLoginURL = function getLoginURL(scopes) {
            return Config.HOST + '/auth/login?scope=' + encodeURIComponent(scopes.join(' '));
          };

          var width = 450,
            height = 730,
            left = window.screen.width / 2 - width / 2,
            top = window.screen.height / 2 - height / 2;

          var messageFn = function messageFn(event) {
            try {
              var hash = JSON.parse(event.data);
              if (hash.type === 'access_token') {
                window.removeEventListener('message', messageFn, false);
                var accessToken = hash.access_token;
                var _expiresIn = hash.expires_in;
                if (accessToken === '') {
                  // todo: implement login error
                } else {
                  var _refreshToken = hash.refresh_token;
                  localStorage.setItem('refreshToken', _refreshToken);
                  localStorage.setItem('accessToken', accessToken);
                  localStorage.setItem('expiresIn', Date.now() + _expiresIn * 1000);
                  store.dispatch((0, _sessionActions.updateTokenSuccess)(accessToken));
                  store.dispatch(getCurrentUser()).then(function() {
                    return store.dispatch((0, _sessionActions.loginSuccess)());
                  });
                }
              }
            } catch (e) {
              // do nothing
              console.error(e);
            }
          };
          window.addEventListener('message', messageFn, false);

          var url = getLoginURL(['user-read-playback-state', 'user-modify-playback-state']);
          window.open(
            url,
            'Spotify',
            'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' +
              width +
              ', height=' +
              height +
              ', top=' +
              top +
              ', left=' +
              left
          );

          break;
        }
        default:
          break;
      }
      return result;
    };
  };
};
