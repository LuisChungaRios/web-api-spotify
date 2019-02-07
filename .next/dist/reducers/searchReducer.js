'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _ActionTypes = require('../constants/ActionTypes');

var initialState = {};

exports.default = function(state, action) {
  switch (action.type) {
    case _ActionTypes.SEARCH_TRACKS:
      return { query: action.query };
    case _ActionTypes.SEARCH_TRACKS_SUCCESS:
      if (state.query === action.query) {
        return {
          query: action.query,
          results: action.results
        };
      } else {
        return state;
      }
    case _ActionTypes.SEARCH_TRACKS_RESET:
      return initialState;

    default:
      return state ? state : initialState;
  }
};
