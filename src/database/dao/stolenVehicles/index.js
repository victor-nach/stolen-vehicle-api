import db from '../../config';
import { getAllStolenVehicles, getSingleStolenVehicle, insertStolenVehicle } from '../../utils/queries';

class StolenVehicles {
  /**
  * @name getAllStolenVehicles
  * @returns database rows
  * @description searches for a all the stolen vehicles in the database
*/
  static async getAllStolenVehicles() {
    const { rows } = await db.query(getAllStolenVehicles);
    return rows;
  }

  /**
  * @name getOneStolenVehicle
  * @param { Number } status
  * @returns database row
  * @description searches for a single stolen vehicle by chassis number or id
*/
  static async getOneStolenVehicle(id) {
    const { rows } = await db.query(getSingleStolenVehicle, [id]);
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
      userId, ownerFirstName, ownerLastName, ownerEmailAddress, ownerPhoneNumber,
      vehicleChassisNumber, make, model, year, color, location, description,
    } = data;
    const values = [
      userId, ownerFirstName, ownerLastName, ownerEmailAddress, ownerPhoneNumber,
      vehicleChassisNumber, make, model, year, color, location, description,
    ];
    const { rows } = await db.query(insertStolenVehicle, values);
    return rows[0];
  }
}

export default StolenVehicles;
