import db from '../../config';

class StolenVehicles {
  static async getAllStolenVehicles() {
    const { rows } = await db.query('SELECT * FROM vehicles');
    return rows;
  }

  static async getOneStolenVehicle(id) {
    const { rows } = await db.query('SELECT * FROM vehicles WHERE id = $1', [id]);
    return rows;
  }
}

export default StolenVehicles;
