/** @format */
import validator from 'validator';

export const isValidEmail = (email: string) => {
  return validator.isEmail(email);
};
