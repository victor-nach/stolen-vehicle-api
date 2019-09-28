"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _vehicles = _interopRequireDefault(require("./vehicles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.use('/stolenVehicles', _vehicles.default);
var _default = router;
exports.default = _default;