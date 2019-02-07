'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _ActionTypes = require('../constants/ActionTypes');

var _searchActions = require('../actions/searchActions');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

var searchTracks = function searchTracks(query) {
  return function(dispatch, getState) {
    var shouldAddWildcard = false;
    if (query.length > 1) {
      var words = query.split(' ');
      var lastWord = words[words.length - 1];
      if (/^[a-z0-9\s]+$/i.test(lastWord) && query.lastIndexOf('*') !== query.length - 1) {
        shouldAddWildcard = true;
      }
    }

    var wildcardQuery = '' + query + (shouldAddWildcard ? '*' : ''); // Trick to improve search results

    return (0, _isomorphicUnfetch2.default)(
      SPOTIFY_API_BASE + '/search?q=' + encodeURIComponent(wildcardQuery) + '&type=track&limit=10',
      {
        headers: {
          Authorization: 'Bearer ' + getState().session.access_token
        }
      }
    )
      .then(function(res) {
        return res.json();
      })
      .then(function(res) {
        dispatch((0, _searchActions.searchTracksSuccess)(query, res.tracks.items));
      });
  };
};

exports.default = function(store) {
  return function(next) {
    return function(action) {
      var result = next(action);
      switch (action.type) {
        case _ActionTypes.SEARCH_TRACKS: {
          return store.dispatch(searchTracks(action.query));
          break;
        }
        default:
          break;
      }
      return result;
    };
  };
};
