'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.down = exports.up = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var up = exports.up = function up() {
  return _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', { d: 'M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z' })
  );
};

var down = exports.down = function down() {
  return _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', { d: 'M7.41 15.41l4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z' })
  );
};