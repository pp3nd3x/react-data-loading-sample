"use strict";

var _express = _interopRequireDefault(require("express"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var html = "\n  <div id=\"root\">\n    ".concat((0, _server.renderToString)(_react.default.createElement(_App.default, null)), "\n  </div>\n  <script src=\"/client.js\">\n");
app.get('*', function (req, res) {
  res.send(html);
});
app.listen(3000, function () {
  return console.log('Express running on port 3000');
});

