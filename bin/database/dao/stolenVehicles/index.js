"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("../../config"));

var _queries = require("../../utils/queries");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class StolenVehicles {
  /**
  * @name getAllStolenVehicles
  * @returns database rows
  * @description searches for a all the stolen vehicles in the database
  */
  static async getAllStolenVehicles() {
    const {
      rows
    } = await _config.default.query(_queries.getAllStolenVehicles);
    return rows;
  }
  /**
  * @name getOneStolenVehicle
  * @param { Number } status
  * @returns database row
  * @description searches for a single stolen vehicle by chassis number or id
  */


  static async getOneStolenVehicle(id) {
    const {
      rows
    } = await _config.default.query(_queries.getSingleStolenVehicle, [id]);
    if (!rows[0]) throw new Error('no_match');
    return rows[0];
  }
  /**
  * @name getOneStolenVehicle
  * @param { Number } status
  * @returns database row
  * @description searches for a single stolen vehicle by chassis number or id
  */


  static async createStolenVehicle(data) {
    const {
      userId,
      ownerFirstName,
      ownerLastName,
      ownerEmailAddress,
      ownerPhoneNumber,
      vehicleChassisNumber,
      make,
      model,
      year,
      color,
      location,
      description
    } = data;
    const values = [userId, ownerFirstName, ownerLastName, ownerEmailAddress, ownerPhoneNumber, vehicleChassisNumber, make, model, year, color, location, description];
    const {
      rows
    } = await _config.default.query(_queries.insertStolenVehicle, values);
    return rows[0];
  }

}

var _default = StolenVehicles;
exports.default = _default;