import db from '../../config';

class StolenVehicles {
  /**
  * @name getAllStolenVehicles
  * @returns database rows
  * @description searches for a all the stolen vehicles in the database
*/
  static async getAllStolenVehicles() {
    const { rows } = await db.query('SELECT * FROM vehicles');
    return rows;
  }

  /**
  * @name getOneStolenVehicle
  * @param { Number } status
  * @returns database row
  * @description searches for a single stolen vehicle by chassis number or id
*/
  static async getOneStolenVehicle(id) {
    const { rows } = await db.query('SELECT * FROM vehicles WHERE "vehicleChassisNumber" = $1', [id]);
    if (!rows[0]) throw new Error('no_match');
    return rows[0];
  }
}

export default StolenVehicles;
