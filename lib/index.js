'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('./icons');

var icons = _interopRequireWildcard(_icons);

var style = {
  fill: 'currentcolor',
  verticalAlign: 'middle',
  display: 'inline-block',
  pointerEvents: 'none',
  WebkitUserSelect: 'none'
};

var I = (function (_Component) {
  _inherits(I, _Component);

  function I(props) {
    _classCallCheck(this, I);

    _get(Object.getPrototypeOf(I.prototype), 'constructor', this).call(this, props);
  }

  _createClass(I, [{
    key: 'render',
    value: function render() {
      var Icon = icons[this.props.icon] || this.props.icon || '';
      return _react2['default'].createElement(
        'span',
        { style: this.props.style },
        this.props.dir === 'right' ? this.props.children : '',
        _react2['default'].createElement(
          'svg',
          {
            viewBox: '0 0 24 24',
            preserveAspectRatio: 'xMidYMid meet',
            fit: true,
            style: Object.assign({}, style, {
              width: this.props.size,
              height: this.props.size
            }) },
          _react2['default'].createElement(Icon, null)
        ),
        this.props.dir === 'right' ? '' : this.props.children
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      icon: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
      size: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
      style: _react.PropTypes.object,
      dir: _react.PropTypes.oneOf(['left', 'right'])
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      size: 24
    },
    enumerable: true
  }]);

  return I;
})(_react.Component);

exports['default'] = I;
module.exports = exports['default'];