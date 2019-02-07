'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _style = require('next\\node_modules\\styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Layout = function Layout(props) {
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-2127561053'
    },
    _react2.default.createElement(_style2.default, {
      styleId: '2127561053',
      css: ["div.jsx-2127561053{color:#333;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;}"]
    }),
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-2127561053'
      },
      props.children
    )
  );
};

exports.default = Layout;
