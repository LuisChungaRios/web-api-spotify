'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.fetchTrackSuccess = exports.fetchTrack = exports.searchTracksReset = exports.searchTracksSuccess = exports.searchTracks = undefined;

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

var searchTracks = (exports.searchTracks = function searchTracks(query) {
  return { type: types.SEARCH_TRACKS, query: query };
});
var searchTracksSuccess = (exports.searchTracksSuccess = function searchTracksSuccess(query, results) {
  return {
    type: types.SEARCH_TRACKS_SUCCESS,
    query: query,
    results: results
  };
});
var searchTracksReset = (exports.searchTracksReset = function searchTracksReset() {
  return { type: types.SEARCH_TRACKS_RESET };
});
var fetchTrack = (exports.fetchTrack = function fetchTrack(id) {
  return { type: types.FETCH_TRACK, id: id };
});
var fetchTrackSuccess = (exports.fetchTrackSuccess = function fetchTrackSuccess(id, track) {
  return {
    type: types.FETCH_TRACK_SUCCESS,
    id: id
  };
});
