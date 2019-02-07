'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function(_ref) {
  var index = _ref.index,
    item = _ref.item,
    session = _ref.session,
    onRemoveItem = _ref.onRemoveItem,
    onVoteUp = _ref.onVoteUp;

  var voteUp =
    item.voters &&
    session.user &&
    item.voters.filter(function(v) {
      return v.id === session.user.id;
    }).length === 0
      ? _react2.default.createElement('button', { onClick: onVoteUp }, '\u25B2')
      : null;
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      { style: { paddingRight: '10px' } },
      _react2.default.createElement('img', { src: item.track.album.images[2].url, width: '40', height: '40' })
    ),
    _react2.default.createElement('td', { style: { paddingRight: '10px' } }, index + 1),
    _react2.default.createElement('td', { style: { paddingRight: '10px' } }, item.track.name),
    _react2.default.createElement(
      'td',
      { style: { paddingRight: '10px' } },
      item.track.artists
        .map(function(a) {
          return a.name;
        })
        .join(', ')
    ),
    _react2.default.createElement(
      'td',
      { style: { paddingRight: '10px' } },
      item.user && (item.user.display_name || item.user.id)
    ),
    _react2.default.createElement(
      'td',
      null,
      item.user && session.user && item.user.id === session.user.id
        ? _react2.default.createElement(
            'button',
            {
              onClick: function onClick() {
                onRemoveItem(item.id);
              }
            },
            'X'
          )
        : voteUp
    ),
    _react2.default.createElement(
      'td',
      null,
      item.voters && item.voters.length > 0
        ? _react2.default.createElement(
            'span',
            null,
            item.voters.length === 1 ? '1 vote' : item.voters.length + ' votes'
          )
        : ''
    )
  );
};
