'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _style = require('next\\node_modules\\styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../store/store');

var _PageWithIntl = require('../components/PageWithIntl');

var _PageWithIntl2 = _interopRequireDefault(_PageWithIntl);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var About = function About() {
  return _react2.default.createElement(
    _MyLayout2.default,
    null,
    _react2.default.createElement(_style2.default, {
      styleId: '2365714594',
      css: ['p.jsx-2365714594{margin:20px;padding:20px;}']
    }),
    _react2.default.createElement(
      'p',
      {
        className: 'jsx-2365714594'
      },
      'This is a personal project by ',
      _react2.default.createElement(
        'a',
        { href: 'https://jmperezperez.com', className: 'jsx-2365714594' },
        'Jos\xE9 M. P\xE9rez'
      ),
      ' that uses',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'https://github.com/zeit/next.js', className: 'jsx-2365714594' },
        'Next.js'
      ),
      ' and',
      ' ',
      _react2.default.createElement(
        'a',
        {
          href: 'https://developer.spotify.com/web-api/web-api-connect-endpoint-reference/',
          className: 'jsx-2365714594'
        },
        "Spotify's Connect API endpoints."
      ),
      '. You can see the source code ',
      _react2.default.createElement(
        'a',
        { href: 'https://github.com/JMPerez/c', className: 'jsx-2365714594' },
        'on GitHub'
      ),
      '.'
    )
  );
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, null)((0, _PageWithIntl2.default)(About));
