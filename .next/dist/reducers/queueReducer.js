'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _ActionTypes = require('../constants/ActionTypes');

var initialState = [];

exports.default = function(state, action) {
  switch (action.type) {
    case _ActionTypes.UPDATE_QUEUE:
      return action.data;
    default:
      return state ? state : initialState;
  }
};
