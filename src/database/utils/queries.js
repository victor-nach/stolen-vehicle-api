export const insertStolenVehicle = `INSERT INTO vehicles ( "userId", "ownerFirstName", "ownerLastName", "ownerEmailAddress", "ownerPhoneNumber", "vehicleChassisNumber", "make", "model", "year", "color", "location", "description")
                                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *;`;

export const getSingleStolenVehicle = 'SELECT * FROM vehicles WHERE "vehicleChassisNumber" = $1';

export const getAllStolenVehicles = 'SELECT * FROM vehicles';
