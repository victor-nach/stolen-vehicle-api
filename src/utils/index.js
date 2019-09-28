import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

/**
   * @static hashPassword
   * @description hashes a password
   * @param { string } password
   * @returns hashed password
   */
export const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(8));

/**
   * @static generateToken
   * @description generates authentication token
   * @param { Object } payload - { id, type, is_admin }
   * @returns { String } token
   */
export const generateToken = (payload) => jwt.sign(payload, process.env.SECRET, { expiresIn: '2h' });

/**
   * @static decodeToken
   * @description decodes the token and returns the corresponding payload
   * @param { String } token
   * @returns { Object } payload - { id, type, is_admin }
   * @memberof Helper
   */
export const decodeToken = (token, secret) => jwt.verify(token, secret || process.env.SECRET);

/**
   * @static comparePassword
   * @description compares two passwords
   * @param { String } password
   * @param { String } hashed_password
   * @returns { Boolean } True or false
   */
export const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};
