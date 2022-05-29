import * as bcrypt from 'bcrypt';

export function encodePassword(password: string) {
  const saltOrRounds = 10;
  return bcrypt.hashSync(password, saltOrRounds);
}

export function comparePassword(rawPassword: string, hash: string) {
  return bcrypt.compareSync(rawPassword, hash);
}
