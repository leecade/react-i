'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('./icons');

var icons = _interopRequireWildcard(_icons);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  fill: 'currentcolor',
  verticalAlign: 'middle',
  display: 'inline-block',
  pointerEvents: 'none',
  WebkitUserSelect: 'none'
};

var I = (function (_Component) {
  _inherits(I, _Component);

  function I() {
    _classCallCheck(this, I);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(I).apply(this, arguments));
  }

  _createClass(I, [{
    key: 'render',
    value: function render() {
      var Icon = icons[this.props.icon] || this.props.icon || '';
      if (this.props.fill) style.fill = this.props.fill;
      if (this.props.stroke) style.stroke = this.props.stroke;
      style.width = this.props.size;
      style.height = this.props.size;
      return _react2.default.createElement(
        'span',
        _extends({}, this.props, { style: this.props.style }),
        this.props.dir === 'right' ? this.props.children : '',
        _react2.default.createElement(
          'svg',
          {
            viewBox: '0 0 24 24',
            preserveAspectRatio: 'xMidYMid meet',
            fit: true,
            style: style },
          _react2.default.createElement(Icon, null)
        ),
        this.props.dir === 'right' ? '' : this.props.children
      );
    }
  }]);

  return I;
})(_react.Component);

I.propTypes = {
  icon: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
  size: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  style: _react.PropTypes.object,
  fill: _react.PropTypes.string,
  stroke: _react.PropTypes.string,
  dir: _react.PropTypes.oneOf(['left', 'right'])
};
I.defaultProps = {
  size: 24
};
exports.default = I;