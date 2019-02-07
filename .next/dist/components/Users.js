'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _style = require('next\\node_modules\\styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function(_ref) {
  var items = _ref.items;

  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-1123997634'
    },
    _react2.default.createElement(_style2.default, {
      styleId: '1123997634',
      css: [
        '.user-list.jsx-1123997634{list-style:none;margin:0;padding:0;}',
        '.user-list__item.jsx-1123997634{display:block;margin-bottom:0.5em;}',
        '.user-image.jsx-1123997634{border-radius:50%;}',
        '.user-name.jsx-1123997634{line-height:30px;}',
        '.media.jsx-1123997634,.media__bd.jsx-1123997634{overflow:hidden;_overflow:visible;zoom:1;}',
        '.media.jsx-1123997634 .media__img.jsx-1123997634{float:left;margin-right:10px;}',
        '.header-2.jsx-1123997634{color:#999;font-size:11px;text-transform:uppercase;}'
      ]
    }),
    _react2.default.createElement(
      'h2',
      {
        className: 'jsx-1123997634' + ' ' + 'header-2'
      },
      _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'online' })
    ),
    _react2.default.createElement(
      'ul',
      {
        className: 'jsx-1123997634' + ' ' + 'user-list'
      },
      items.map(function(i, index) {
        var userName = i.display_name || i.id;
        return _react2.default.createElement(
          'li',
          { key: index, className: 'jsx-1123997634' + ' ' + 'user-list__item media' },
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-1123997634' + ' ' + 'media__img'
            },
            _react2.default.createElement('img', {
              src: (i.images && i.images.length && i.images[0].url) || '/static/user-icon.png',
              width: '30',
              height: '30',
              alt: userName,
              title: userName,
              className: 'jsx-1123997634' + ' ' + 'user-image'
            })
          ),
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-1123997634' + ' ' + 'user-name media__bd'
            },
            userName
          )
        );
      })
    ),
    _react2.default.createElement('div', { style: { clear: 'both' }, className: 'jsx-1123997634' })
  );
};
