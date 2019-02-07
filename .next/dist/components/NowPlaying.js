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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var NowPlaying = (function(_React$PureComponent) {
  (0, _inherits3.default)(NowPlaying, _React$PureComponent);

  function NowPlaying() {
    (0, _classCallCheck3.default)(this, NowPlaying);

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (NowPlaying.__proto__ || (0, _getPrototypeOf2.default)(NowPlaying)).call(this)
    );

    _this.state = {
      start: Date.now(),
      currentPosition: 0
    };
    _this.timer = null;
    _this.tick = function() {
      _this.setState({
        currentPosition: Date.now() - _this.state.start + (_this.props.position || 0)
      });
    };
    return _this;
  }

  (0, _createClass3.default)(NowPlaying, [
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(props) {
        if (this.props.position !== props.position || this.props.track !== props.track) {
          this.setState({
            start: Date.now(),
            currentPosition: 0
          });
        }
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.timer = setInterval(this.tick, 300);
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearInterval(this.timer);
      }
    },
    {
      key: 'render',
      value: function render() {
        var percentage = +((this.state.currentPosition * 100) / this.props.track.duration_ms).toFixed(2) + '%';
        var userName = this.props.user.display_name || this.props.user.id;
        return _react2.default.createElement(
          'div',
          {
            className: 'jsx-2557752171' + ' ' + 'now-playing'
          },
          _react2.default.createElement(_style2.default, {
            styleId: '2557752171',
            css: [
              '.now-playing.jsx-2557752171{background-color:#424d58;color:#fff;height:250px;position:relative;width:100%;}',
              '.now-playing__text.jsx-2557752171{padding:40px;}',
              '.now-playing__bd.jsx-2557752171{padding-left:30px;}',
              '.now-playing__track-name.jsx-2557752171{font-size:2em;padding-top:1.2em;}',
              '.now-playing__artist-name.jsx-2557752171{font-size:1.2em;padding-bottom:2em;padding-top:0.5em;}',
              '.now-playing__user.jsx-2557752171{padding-top:0.5em;}',
              '.now-playing__progress_bar.jsx-2557752171{bottom:0;background-color:#D00;height:5px;position:absolute;width:100%;}',
              '.media.jsx-2557752171,.media__bd.jsx-2557752171{overflow:hidden;_overflow:visible;zoom:1;}',
              '.media.jsx-2557752171 .media__img.jsx-2557752171{float:left;margin-right:10px;}',
              '.user-image.jsx-2557752171{border-radius:50%;}',
              '.user-name.jsx-2557752171{line-height:30px;}'
            ]
          }),
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-2557752171' + ' ' + 'now-playing__text media'
            },
            _react2.default.createElement(
              'div',
              {
                className: 'jsx-2557752171' + ' ' + 'media__img'
              },
              _react2.default.createElement('img', {
                src: this.props.track.album.images[1].url,
                width: '170',
                height: '170',
                className: 'jsx-2557752171'
              })
            ),
            _react2.default.createElement(
              'div',
              {
                className: 'jsx-2557752171' + ' ' + 'now-playing__bd media__bd'
              },
              _react2.default.createElement(
                'div',
                {
                  className: 'jsx-2557752171' + ' ' + 'now-playing__track-name'
                },
                this.props.track.name
              ),
              _react2.default.createElement(
                'div',
                {
                  className: 'jsx-2557752171' + ' ' + 'now-playing__artist-name'
                },
                this.props.track.artists
                  .map(function(a) {
                    return a.name;
                  })
                  .join(', ')
              ),
              _react2.default.createElement(
                'div',
                {
                  className: 'jsx-2557752171' + ' ' + 'media__img'
                },
                _react2.default.createElement('img', {
                  src:
                    (this.props.user.images && this.props.user.images.length && this.props.user.images[0].url) ||
                    '/static/user-icon.png',
                  width: '30',
                  height: '30',
                  alt: userName,
                  title: userName,
                  className: 'jsx-2557752171' + ' ' + 'user-image'
                })
              ),
              _react2.default.createElement(
                'div',
                {
                  className: 'jsx-2557752171' + ' ' + 'user-name media__bd'
                },
                userName
              )
            )
          ),
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-2557752171' + ' ' + 'now-playing__progress'
            },
            _react2.default.createElement('div', {
              style: { width: percentage },
              className: 'jsx-2557752171' + ' ' + 'now-playing__progress_bar'
            })
          )
        );
      }
    }
  ]);

  return NowPlaying;
})(_react2.default.PureComponent);

exports.default = NowPlaying;
