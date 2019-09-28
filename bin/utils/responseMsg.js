"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.responseShort = exports.response = exports.responseErr = void 0;

/**
  * @param { Object } res
  * @param { Number } status
  * @param { Object } message
  * @returns respsonse body
  * @description ddefines the standard response format in the case of an error
*/
const responseErr = (res, status, message) => res.status(status).json({
  status: 'error',
  error: message
});
/**
  * @param { object } res
  * @param { Number } status
  * @param { Object } message
  * @returns respsonse body
  * @description ddefines the standard response format when a data object is to be returned
*/


exports.responseErr = responseErr;

const response = (res, status, data) => res.status(status).json({
  status: 'success',
  data
});
/**
  * @param { object } res
  * @param { number } status
  * @param { string } message
  * @returns json response message
*/


exports.response = response;

const responseShort = (res, status, message) => res.status(status).json({
  status: 'success',
  message
});

exports.responseShort = responseShort;