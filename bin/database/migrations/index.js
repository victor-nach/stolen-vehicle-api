"use strict";

var _config = _interopRequireDefault(require("../config"));

var _seeders = _interopRequireDefault(require("./seeders"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const migrate = async () => {
  const text = `
  DROP TABLE IF EXISTS users CASCADE;
  CREATE TABLE users(
    "id" SERIAL NOT NULL PRIMARY KEY,
    "email" VARCHAR(128) UNIQUE NOT NULL,
    "firstName" VARCHAR(128) NOT NULL,
    "lastName" VARCHAR(128) NOT NULL,
    "hashedPassword" VARCHAR(128) NOT NULL,
    "role" VARCHAR (35) NOT NULL,
    "designation" VARCHAR(128) NOT NULL,
    "createdOn" TIMESTAMP NOT NULL DEFAULT (NOW())
  );
  DROP TABLE IF EXISTS vehicles CASCADE;
  CREATE TABLE vehicles(
    "id" SERIAL NOT NULL PRIMARY KEY,
    "userId" VARCHAR(128) NOT NULL,
    "ownerFirstName" VARCHAR(128) NOT NULL,
    "ownerLastName" VARCHAR(128) NOT NULL,
    "ownerEmailAddress" VARCHAR(128) NOT NULL,
    "ownerPhoneNumber" VARCHAR(128) NOT NULL,
    "vehicleChassisNumber" VARCHAR(128) UNIQUE NOT NULL,
    "model" VARCHAR(128) NOT NULL,
    "make" VARCHAR(128) NOT NULL,
    "year" BIGINT NOT NULL,
    "color" VARCHAR(128) NOT NULL,
    "location" VARCHAR(128) NOT NULL,
    "date" VARCHAR(128) NOT NULL DEFAULT (NOW()),
    "description" VARCHAR(5128) NOT NULL,
    "createdOn" TIMESTAMP NOT NULL DEFAULT (NOW())
  );
  `;
  await _config.default.query(text + _seeders.default);
};

migrate();