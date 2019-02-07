'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.initStore = undefined;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('../reducers');

var _sessionMiddleware = require('../middlewares/sessionMiddleware');

var _sessionMiddleware2 = _interopRequireDefault(_sessionMiddleware);

var _playbackMiddleware = require('../middlewares/playbackMiddleware');

var _playbackMiddleware2 = _interopRequireDefault(_playbackMiddleware);

var _devicesMiddleware = require('../middlewares/devicesMiddleware');

var _devicesMiddleware2 = _interopRequireDefault(_devicesMiddleware);

var _socketMiddleware = require('../middlewares/socketMiddleware');

var _socketMiddleware2 = _interopRequireDefault(_socketMiddleware);

var _loggerMiddleware = require('../middlewares/loggerMiddleware');

var _loggerMiddleware2 = _interopRequireDefault(_loggerMiddleware);

var _searchMiddleware = require('../middlewares/searchMiddleware');

var _searchMiddleware2 = _interopRequireDefault(_searchMiddleware);

var _sessionActions = require('../actions/sessionActions');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var initStore = (exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var store = (0, _redux.createStore)(
    (0, _reducers.reducers)(),
    initialState,
    (0, _redux.applyMiddleware)(
      _reduxThunk2.default,
      _sessionMiddleware2.default,
      _socketMiddleware.socketMiddleware,
      _playbackMiddleware2.default,
      _devicesMiddleware2.default,
      _loggerMiddleware2.default,
      _searchMiddleware2.default
    )
  );
  (0, _socketMiddleware2.default)(store);
  store.dispatch((0, _sessionActions.load)());
  return store;
});
