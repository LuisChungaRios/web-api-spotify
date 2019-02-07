'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _style = require('next\\node_modules\\styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _reactRedux = require('react-redux');

var _reactIntl = require('react-intl');

var _sessionActions = require('../actions/sessionActions');

var _playbackActions = require('../actions/playbackActions');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _require = require('./ButtonStyle'),
  ButtonStyle = _require.ButtonStyle,
  ButtonDarkStyle = _require.ButtonDarkStyle;

var linkStyle = {
  lineHeight: '30px',
  marginRight: 15,
  color: '#D00'
};

var mainLinkStyle = {
  float: 'left',
  marginRight: '10px'
};

var headerStyle = {
  backgroundColor: 'rgb(227, 235, 244)',
  padding: '20px 40px'
};

var getNameFromUser = function getNameFromUser(user) {
  return user.display_name || user.id;
};

var Header = function Header(_ref) {
  var session = _ref.session,
    muted = _ref.muted,
    mutePlayback = _ref.mutePlayback,
    unmutePlayback = _ref.unmutePlayback,
    login = _ref.login;
  return _react2.default.createElement(
    'div',
    { style: headerStyle },
    _react2.default.createElement(
      _link2.default,
      { href: '/' },
      _react2.default.createElement(
        'a',
        { style: (0, _assign2.default)({}, linkStyle, mainLinkStyle) },
        _react2.default.createElement('img', { src: '/static/c-icon-128.png', height: '30' })
      )
    ),
    _react2.default.createElement(
      _link2.default,
      { href: '/about' },
      _react2.default.createElement(
        'a',
        { style: linkStyle },
        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'about' })
      )
    ),
    session.user
      ? _react2.default.createElement(
          'div',
          {
            className: 'jsx-1791358191' + ' ' + 'media user-header'
          },
          _react2.default.createElement(_style2.default, {
            styleId: '1791358191',
            css: [
              '.user-header.jsx-1791358191{float:right;width:150px;color:#333;}',
              '.user-image.jsx-1791358191{border-radius:50%;}',
              '.user-name.jsx-1791358191{line-height:30px;}',
              '.media.jsx-1791358191,.media__bd.jsx-1791358191{overflow:hidden;_overflow:visible;zoom:1;}',
              '.media.jsx-1791358191 .media__img.jsx-1791358191{float:left;margin-right:10px;}'
            ]
          }),
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-1791358191' + ' ' + 'media__img'
            },
            _react2.default.createElement('img', {
              src:
                (session.user.images && session.user.images.length && session.user.images[0].url) ||
                '/static/user-icon.png',
              width: '30',
              height: '30',
              alt: getNameFromUser(session.user),
              className: 'jsx-1791358191' + ' ' + 'user-image'
            })
          ),
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-1791358191' + ' ' + 'user-name media__bd'
            },
            getNameFromUser(session.user)
          )
        )
      : _react2.default.createElement(
          'button',
          { className: 'btn btn--dark', style: { float: 'right' }, onClick: login },
          _react2.default.createElement(_style2.default, {
            styleId: ButtonStyle.__hash,
            css: ButtonStyle
          }),
          _react2.default.createElement(_style2.default, {
            styleId: ButtonDarkStyle.__hash,
            css: ButtonDarkStyle
          }),
          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'login' })
        ),
    session.user
      ? _react2.default.createElement(
          'div',
          {
            className: 'jsx-1288354138' + ' ' + 'playback-control'
          },
          _react2.default.createElement(_style2.default, {
            styleId: ButtonStyle.__hash,
            css: ButtonStyle
          }),
          _react2.default.createElement(_style2.default, {
            styleId: ButtonDarkStyle.__hash,
            css: ButtonDarkStyle
          }),
          _react2.default.createElement(_style2.default, {
            styleId: '1288354138',
            css: ['.playback-control.jsx-1288354138{float:right;width:200px;}']
          }),
          _react2.default.createElement(
            'button',
            {
              onClick: function onClick() {
                muted ? unmutePlayback() : mutePlayback();
              },
              className: 'jsx-1288354138' + ' ' + 'btn btn--dark'
            },
            muted ? 'Unmute' : 'Mute'
          )
        )
      : null
  );
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: function login() {
      return dispatch((0, _sessionActions.login)());
    },
    mutePlayback: function mutePlayback() {
      return dispatch((0, _playbackActions.mutePlayback)());
    },
    unmutePlayback: function unmutePlayback() {
      return dispatch((0, _playbackActions.unmutePlayback)());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    session: state.session,
    muted: state.playback.muted
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header);
