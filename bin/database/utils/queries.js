"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllStolenVehicles = exports.getSingleStolenVehicle = exports.insertStolenVehicle = void 0;
const insertStolenVehicle = `INSERT INTO vehicles ( "userId", "ownerFirstName", "ownerLastName", "ownerEmailAddress", "ownerPhoneNumber", "vehicleChassisNumber", "make", "model", "year", "color", "location", "description")
                                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *;`;
exports.insertStolenVehicle = insertStolenVehicle;
const getSingleStolenVehicle = 'SELECT * FROM vehicles WHERE "vehicleChassisNumber" = $1';
exports.getSingleStolenVehicle = getSingleStolenVehicle;
const getAllStolenVehicles = 'SELECT * FROM vehicles';
exports.getAllStolenVehicles = getAllStolenVehicles;