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

var _searchActions = require('../actions/searchActions');

var _queueActions = require('../actions/queueActions');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ResultsList = (function(_Component) {
  (0, _inherits3.default)(ResultsList, _Component);

  function ResultsList() {
    (0, _classCallCheck3.default)(this, ResultsList);

    return (0, _possibleConstructorReturn3.default)(
      this,
      (ResultsList.__proto__ || (0, _getPrototypeOf2.default)(ResultsList)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(ResultsList, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
          results = _props.results,
          focus = _props.focus;

        return _react2.default.createElement(
          'ul',
          {
            className: 'jsx-407124332' + ' ' + 'add-to-queue__search-results'
          },
          _react2.default.createElement(_style2.default, {
            styleId: '407124332',
            css: [
              '.add-to-queue__search-results.jsx-407124332{border:1px solid #999;list-style:none;margin:0;padding:0;}',
              '.add-to-queue__search-results-item.jsx-407124332{padding:5px 0 5px 5px;}',
              '.add-to-queue__search-results-item--focused.jsx-407124332{background-color:#eee;}'
            ]
          }),
          results.map(function(r, index) {
            var isFocused = focus === index;
            var className =
              'add-to-queue__search-results-item' + (isFocused ? ' add-to-queue__search-results-item--focused' : '');
            return _react2.default.createElement(
              'li',
              {
                key: r.id,
                onClick: function onClick() {
                  return _this2.props.onSelect(r.id);
                },
                className: 'jsx-407124332' + ' ' + (className || '')
              },
              r.name,
              ' - ',
              r.artists[0].name
            );
          })
        );
      }
    }
  ]);

  return ResultsList;
})(_react.Component);

var AddToQueue = (function(_Component2) {
  (0, _inherits3.default)(AddToQueue, _Component2);

  function AddToQueue() {
    var _ref;

    var _temp, _this3, _ret;

    (0, _classCallCheck3.default)(this, AddToQueue);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this3 = (0, _possibleConstructorReturn3.default)(
        this,
        (_ref = AddToQueue.__proto__ || (0, _getPrototypeOf2.default)(AddToQueue)).call.apply(_ref, [this].concat(args))
      )),
      _this3)),
      (_this3.state = {
        text: _this3.props.text || '',
        focus: -1
      }),
      (_this3.handleChange = function(e) {
        var text = e.target.value;
        _this3.setState({ text: text });
        if (text !== '') {
          _this3.props.searchTracks(text);
        } else {
          _this3.setState({ focus: -1 });
          _this3.props.searchTracksReset();
        }
      }),
      (_this3.handleSelectElement = function(id) {
        _this3.setState({ text: '' });
        _this3.props.queueTrack(id);
        _this3.props.searchTracksReset();
      }),
      (_this3.handleBlur = function(e) {
        // todo: this happens before the item from the list is selected, hiding the
        // list of results. We need to do this in a different way.
        /*    this.setState({ focus: -1 });
      this.props.searchTracksReset(); */
      }),
      (_this3.handleFocus = function(e) {
        if (e.target.value !== '') {
          _this3.props.searchTracks(e.target.value);
        }
      }),
      (_this3.handleKeyDown = function(e) {
        switch (e.keyCode) {
          case 38:
            // up
            _this3.setState({ focus: _this3.state.focus - 1 });
            break;
          case 40:
            // down
            _this3.setState({ focus: _this3.state.focus + 1 });
            break;
          case 13: {
            var correct = false;
            if (_this3.state.focus !== -1) {
              _this3.props.queueTrack(_this3.props.search.results[_this3.state.focus].id);
              correct = true;
            } else {
              var text = e.target.value.trim();
              if (text.length !== 0) {
                _this3.props.queueTrack(text);
                correct = true;
              }
            }
            if (correct) {
              _this3.setState({ text: '' });
              _this3.props.searchTracksReset();
              _this3.setState({ focus: -1 });
            }
            break;
          }
        }
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this3, _ret)
    );
  }

  (0, _createClass3.default)(AddToQueue, [
    {
      key: 'render',
      value: function render() {
        var placeholder = this.props.intl.formatMessage({ id: 'queue.add' });
        var results = this.props.search.results;
        return _react2.default.createElement(
          'div',
          { onBlur: this.handleBlur, className: 'jsx-3496109256' + ' ' + 'add-to-queue' },
          _react2.default.createElement(_style2.default, {
            styleId: '3496109256',
            css: ['.add-to-queue__input.jsx-3496109256{padding:5px;width:400px;}']
          }),
          _react2.default.createElement('input', {
            placeholder: placeholder,
            value: this.state.text,
            onChange: this.handleChange,
            onKeyDown: this.handleKeyDown,
            onFocus: this.handleFocus,
            className: 'jsx-3496109256' + ' ' + 'add-to-queue__input'
          }),
          results &&
            _react2.default.createElement(ResultsList, {
              results: results,
              onSelect: this.handleSelectElement,
              focus: this.state.focus
            })
        );
      }
    }
  ]);

  return AddToQueue;
})(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    queueTrack: function queueTrack(text) {
      return dispatch((0, _queueActions.queueTrack)(text));
    },
    searchTracks: function searchTracks(query) {
      return dispatch((0, _searchActions.searchTracks)(query));
    },
    searchTracksReset: function searchTracksReset() {
      return dispatch((0, _searchActions.searchTracksReset)());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    search: state.search
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactIntl.injectIntl)(AddToQueue));
