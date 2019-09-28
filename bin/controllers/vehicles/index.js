"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStolenVehicles = exports.getStolenVehicles = void 0;

var _stolenVehicles = _interopRequireDefault(require("../../database/dao/stolenVehicles"));

var _responseMsg = require("../../utils/responseMsg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * @name getStolenVehicles
  * @param { Object } req
  * @param { Object } res
  * @returns API response
  * @description handles requests for viewing all stolen vehicles or single vehicle
*/
const getStolenVehicles = async (req, res) => {
  try {
    const {
      id
    } = req.query;
    let data;
    if (id) data = await _stolenVehicles.default.getOneStolenVehicle(id);else data = await _stolenVehicles.default.getAllStolenVehicles();
    return (0, _responseMsg.response)(res, 200, data);
  } catch (error) {
    if (error.message === 'no_match') return (0, _responseMsg.responseErr)(res, 404, 'No records found for the provided chassis number');
    return (0, _responseMsg.responseErr)(res, 500, 'Service Temporarily Down, please try again later');
  }
};
/**
  * @name createStolenVehicles
  * @param { Object } req
  * @param { Object } res
  * @returns API response
  * @description handles requests for creating a new stolen vehicle
*/


exports.getStolenVehicles = getStolenVehicles;

const createStolenVehicles = async (req, res) => {
  try {
    const data = await _stolenVehicles.default.createStolenVehicle(req.body);
    return (0, _responseMsg.response)(res, 200, data);
  } catch (error) {
    return (0, _responseMsg.responseErr)(res, 500, 'Service Temporarily Down, please try again later');
  }
};

exports.createStolenVehicles = createStolenVehicles;