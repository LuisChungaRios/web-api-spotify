'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next\\dist\\server\\document.js');

var _document2 = _interopRequireDefault(_document);

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.

var IntlDocument = (function(_Document) {
  (0, _inherits3.default)(IntlDocument, _Document);

  function IntlDocument() {
    (0, _classCallCheck3.default)(this, IntlDocument);

    return (0, _possibleConstructorReturn3.default)(
      this,
      (IntlDocument.__proto__ || (0, _getPrototypeOf2.default)(IntlDocument)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(
    IntlDocument,
    [
      {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(
            'html',
            null,
            _react2.default.createElement(
              _document.Head,
              null,
              _react2.default.createElement('title', null, 'Media Impact'),
              _react2.default.createElement('link', { rel: 'shortcut icon', href: '/static/c-icon-128.png' }),
              _react2.default.createElement('meta', {
                name: 'viewport',
                content: 'initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width'
              }),
              _react2.default.createElement('style', null, 'body { margin: 0px ; background: #fff;} /* custom! */')
            ),
            _react2.default.createElement(
              'body',
              { className: 'custom_class' },
              this.props.customValue,
              _react2.default.createElement(_document.Main, null),
              _react2.default.createElement('script', {
                dangerouslySetInnerHTML: {
                  __html: this.props.localeDataScript
                }
              }),
              _react2.default.createElement(_document.NextScript, null),
              _react2.default.createElement('script', {
                dangerouslySetInnerHTML: {
                  __html:
                    "(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;e=o.createElement(i);r=o.getElementsByTagName(i)[0];e.src='//www.google-analytics.com/analytics.js';r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));ga('create','UA-39254352-1');ga('send','pageview');"
                }
              })
            )
          );
        }
      }
    ],
    [
      {
        key: 'getInitialProps',
        value: (function() {
          var _ref = (0, _asyncToGenerator3.default)(
            /*#__PURE__*/ _regenerator2.default.mark(function _callee(context) {
              var props,
                _context$req,
                locale,
                localeDataScript,
                _context$renderPage,
                html,
                head,
                errorHtml,
                chunks,
                styles;

              return _regenerator2.default.wrap(
                function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        _context.next = 2;
                        return (0, _get3.default)(
                          IntlDocument.__proto__ || (0, _getPrototypeOf2.default)(IntlDocument),
                          'getInitialProps',
                          this
                        ).call(this, context);

                      case 2:
                        props = _context.sent;
                        (_context$req = context.req),
                          (locale = _context$req.locale),
                          (localeDataScript = _context$req.localeDataScript);
                        (_context$renderPage = context.renderPage()),
                          (html = _context$renderPage.html),
                          (head = _context$renderPage.head),
                          (errorHtml = _context$renderPage.errorHtml),
                          (chunks = _context$renderPage.chunks);
                        styles = (0, _server2.default)();
                        return _context.abrupt('return', {
                          html: html,
                          head: head,
                          errorHtml: errorHtml,
                          chunks: chunks,
                          styles: styles,
                          locale: locale,
                          localeDataScript: localeDataScript
                        });

                      case 7:
                      case 'end':
                        return _context.stop();
                    }
                  }
                },
                _callee,
                this
              );
            })
          );

          function getInitialProps(_x) {
            return _ref.apply(this, arguments);
          }

          return getInitialProps;
        })()
      }
    ]
  );

  return IntlDocument;
})(_document2.default);

exports.default = IntlDocument;
