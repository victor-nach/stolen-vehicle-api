import StolenVehicles from '../../database/dao/stolenVehicles';
import { response } from '../../utils/responseMsg';

export const getStolenVehicles = async (req, res) => {
  const { id } = req.query;
  let data;
  if (id) data = await StolenVehicles.getOneStolenVehicle(id);
  else data = await StolenVehicles.getAllStolenVehicles();
  return response(res, 200, data);
};

export const createStolenVehicles = (req, res) => {};
