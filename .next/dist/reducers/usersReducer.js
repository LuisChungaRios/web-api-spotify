'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _ActionTypes = require('../constants/ActionTypes');

var initialState = [
  {
    id: 'something',
    name: 'Adrian'
  },
  {
    id: 'something',
    name: 'Bea'
  },
  {
    id: 'something',
    name: 'Carlos'
  }
];

exports.default = function(state, action) {
  switch (action.type) {
    case _ActionTypes.UPDATE_USERS:
      return action.data;
    default:
      return state ? state : initialState;
  }
};
