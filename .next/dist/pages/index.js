'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('next\\node_modules\\styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _store = require('../store/store');

var _queueActions = require('../actions/queueActions');

var _usersActions = require('../actions/usersActions');

var _playbackActions = require('../actions/playbackActions');

var _Users = require('../components/Users');

var _Users2 = _interopRequireDefault(_Users);

var _Queue = require('../components/Queue');

var _Queue2 = _interopRequireDefault(_Queue);

var _AddToQueue = require('../components/AddToQueue');

var _AddToQueue2 = _interopRequireDefault(_AddToQueue);

var _NowPlaying = require('../components/NowPlaying');

var _NowPlaying2 = _interopRequireDefault(_NowPlaying);

var _Devices = require('../components/Devices');

var _Devices2 = _interopRequireDefault(_Devices);

var _PageWithIntl = require('../components/PageWithIntl');

var _PageWithIntl2 = _interopRequireDefault(_PageWithIntl);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Main = (function(_React$Component) {
  (0, _inherits3.default)(Main, _React$Component);

  function Main() {
    (0, _classCallCheck3.default)(this, Main);

    return (0, _possibleConstructorReturn3.default)(
      this,
      (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(
    Main,
    [
      {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(
            _MyLayout2.default,
            null,
            this.props.playing.track
              ? _react2.default.createElement(_NowPlaying2.default, {
                  track: this.props.playing.track,
                  user: this.props.playing.user,
                  position: this.props.playing.position
                })
              : null,
            _react2.default.createElement(
              'div',
              {
                className: 'jsx-3999345043' + ' ' + 'app'
              },
              _react2.default.createElement(_style2.default, {
                styleId: '3999345043',
                css: ['.app.jsx-3999345043{margin:20px;padding:20px;}']
              }),
              _react2.default.createElement(
                'div',
                { style: { float: 'left' }, className: 'jsx-3999345043' },
                _react2.default.createElement(_Queue2.default, {
                  items: this.props.queue,
                  session: this.props.session
                }),
                this.props.session.user !== null ? _react2.default.createElement(_AddToQueue2.default, null) : null,
                this.props.session.user !== null ? _react2.default.createElement(_Devices2.default, null) : null
              ),
              _react2.default.createElement(
                'div',
                { style: { float: 'right', width: '150px' }, className: 'jsx-3999345043' },
                _react2.default.createElement(_Users2.default, { items: this.props.users })
              )
            )
          );
        }
      }
    ],
    [
      {
        key: 'getInitialProps',
        value: function getInitialProps(_ref) {
          var req = _ref.req,
            store = _ref.store,
            isServer = _ref.isServer;

          return _promise2.default.all([
            store.dispatch((0, _queueActions.fetchQueue)()),
            store.dispatch((0, _usersActions.fetchUsers)()),
            store.dispatch((0, _playbackActions.fetchPlayingContext)())
          ]);
        }
      }
    ]
  );

  return Main;
})(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    playing: state.playback,
    queue: state.queue,
    users: state.users,
    session: state.session
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, mapStateToProps, null)(
  (0, _PageWithIntl2.default)(Main)
);
