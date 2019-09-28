"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comparePassword = exports.decodeToken = exports.generateToken = exports.hashPassword = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();
/**
   * @name hashPassword
   * @description hashes a password
   * @param { string } password
   * @returns hashed password
   */


const hashPassword = password => _bcryptjs.default.hashSync(password, _bcryptjs.default.genSaltSync(8));
/**
   * @name generateToken
   * @description generates authentication token
   * @param { Object } payload - { id, type, is_admin }
   * @returns { String } token
   */


exports.hashPassword = hashPassword;

const generateToken = payload => _jsonwebtoken.default.sign(payload, process.env.SECRET, {
  expiresIn: '2h'
});
/**
   * @name decodeToken
   * @description decodes the token and returns the corresponding payload
   * @param { String } token
   * @returns { Object } payload
   */


exports.generateToken = generateToken;

const decodeToken = (token, secret) => _jsonwebtoken.default.verify(token, secret || process.env.SECRET);
/**
   * @name comparePassword
   * @description compares two passwords
   * @param { String } password
   * @param { String } hashed_password
   * @returns { Boolean } True or false
   */


exports.decodeToken = decodeToken;

const comparePassword = (password, hashedPassword) => {
  return _bcryptjs.default.compareSync(password, hashedPassword);
};

exports.comparePassword = comparePassword;