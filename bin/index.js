"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

var _responseMsg = require("./utils/responseMsg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const PORT = 3000 || process.env.PORT;
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  preflightContinue: false,
  optionsSuccessStatus: 204
};
app.use((0, _cors.default)(corsOptions));
app.use('/', _routes.default);
app.get('/', (req, res) => {
  (0, _responseMsg.responseShort)(res, 200, 'welcome');
});
app.all('*', (req, res) => {
  (0, _responseMsg.responseErr)(res, 404, 'Sorry endpoint does not exist');
});
app.listen(PORT);
var _default = app;
exports.default = _default;