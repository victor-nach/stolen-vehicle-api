"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _vehicles = require("../../controllers/vehicles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/', _vehicles.getStolenVehicles);
router.post('/', _vehicles.createStolenVehicles);
var _default = router;
exports.default = _default;