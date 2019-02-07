'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactIntl = require('react-intl');

var _QueueItem = require('./QueueItem');

var _QueueItem2 = _interopRequireDefault(_QueueItem);

var _queueActions = require('../actions/queueActions');

var _voteActions = require('../actions/voteActions');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Queue = (function(_React$PureComponent) {
  (0, _inherits3.default)(Queue, _React$PureComponent);

  function Queue() {
    (0, _classCallCheck3.default)(this, Queue);

    return (0, _possibleConstructorReturn3.default)(
      this,
      (Queue.__proto__ || (0, _getPrototypeOf2.default)(Queue)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(Queue, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
          items = _props.items,
          session = _props.session;

        return _react2.default.createElement(
          'div',
          { style: { paddingBottom: '10px' } },
          _react2.default.createElement(
            'h2',
            null,
            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'queue.title' })
          ),
          items.length === 0
            ? _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'queue.empty' })
              )
            : _react2.default.createElement(
                'table',
                {
                  className: 'jsx-1423284646' + ' ' + 'queue'
                },
                _react2.default.createElement(_style2.default, {
                  styleId: '1423284646',
                  css: ['.queue.jsx-1423284646{max-width:550px;}']
                }),
                _react2.default.createElement(
                  'tbody',
                  {
                    className: 'jsx-1423284646'
                  },
                  items.map(function(i, index) {
                    return _react2.default.createElement(_QueueItem2.default, {
                      item: i,
                      session: session,
                      index: index,
                      key: index,
                      onVoteUp: function onVoteUp() {
                        return _this2.props.voteUp(i.id);
                      },
                      onRemoveItem: function onRemoveItem() {
                        return _this2.props.queueRemoveTrack(i.id);
                      }
                    });
                  })
                )
              )
        );
      }
    }
  ]);

  return Queue;
})(_react2.default.PureComponent);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    voteUp: function voteUp(id) {
      return dispatch((0, _voteActions.voteUp)(id));
    },
    queueRemoveTrack: function queueRemoveTrack(id) {
      return dispatch((0, _queueActions.queueRemoveTrack)(id));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    queue: state.queue
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Queue);
