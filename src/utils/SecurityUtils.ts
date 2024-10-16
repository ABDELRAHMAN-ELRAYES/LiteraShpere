import bcrypt from 'bcryptjs';

// hash sensitive data before storing it
export const hash = async (secretWord: string) =>
  await bcrypt.hash(secretWord, 12);

// compare stored hashed data with  entered data
export const compare = async (enteredData: string, hashedData: string) =>
  await bcrypt.compare(enteredData, hashedData);
