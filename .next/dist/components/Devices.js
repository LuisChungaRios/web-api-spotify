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

var _ButtonStyle = require('./ButtonStyle');

var _devicesActions = require('../actions/devicesActions');

var _reducers = require('../reducers');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Devices = (function(_React$PureComponent) {
  (0, _inherits3.default)(Devices, _React$PureComponent);

  function Devices() {
    (0, _classCallCheck3.default)(this, Devices);

    return (0, _possibleConstructorReturn3.default)(
      this,
      (Devices.__proto__ || (0, _getPrototypeOf2.default)(Devices)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(Devices, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          devices = _props.devices,
          isFetching = _props.isFetching,
          fetchAvailableDevices = _props.fetchAvailableDevices,
          transferPlaybackToDevice = _props.transferPlaybackToDevice;

        return _react2.default.createElement(
          'div',
          { style: { paddingBottom: '10px' } },
          _react2.default.createElement(
            'h2',
            null,
            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'devices.title' })
          ),
          _react2.default.createElement(_style2.default, {
            styleId: _ButtonStyle.ButtonStyle.__hash,
            css: _ButtonStyle.ButtonStyle
          }),
          _react2.default.createElement(_style2.default, {
            styleId: _ButtonStyle.ButtonDarkStyle.__hash,
            css: _ButtonStyle.ButtonDarkStyle
          }),
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn--dark',
              disabled: isFetching,
              onClick: function onClick() {
                fetchAvailableDevices();
              }
            },
            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'devices.fetch' })
          ),
          devices.length === 0
            ? _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'devices.empty' })
              )
            : _react2.default.createElement(
                'table',
                null,
                _react2.default.createElement(
                  'tbody',
                  null,
                  devices.map(function(device) {
                    return _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        device.is_active
                          ? _react2.default.createElement('strong', null, 'Active ->')
                          : _react2.default.createElement(
                              'button',
                              {
                                onClick: function onClick() {
                                  transferPlaybackToDevice(device.id);
                                }
                              },
                              _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'devices.transfer' })
                            )
                      ),
                      _react2.default.createElement('td', null, device.name),
                      _react2.default.createElement('td', null, device.type),
                      _react2.default.createElement('td', null, device.volume)
                    );
                  })
                )
              )
        );
      }
    }
  ]);

  return Devices;
})(_react2.default.PureComponent);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchAvailableDevices: function fetchAvailableDevices(index) {
      return dispatch((0, _devicesActions.fetchAvailableDevices)(index));
    },
    transferPlaybackToDevice: function transferPlaybackToDevice(deviceId) {
      return dispatch((0, _devicesActions.transferPlaybackToDevice)(deviceId));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isFetching: (0, _reducers.getIsFetchingDevices)(state),
    devices: (0, _reducers.getDevices)(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Devices);
