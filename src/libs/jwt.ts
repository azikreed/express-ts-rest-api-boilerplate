import { verify, sign } from 'jsonwebtoken';
const { JWT_SECRET } = process.env;

interface SignPayload {
  user: UserPayload;
}

interface UserPayload {
  id: number;
  email: string;
}

export const verifyToken = (token: string) => {
  try {
    return verify(token, JWT_SECRET) as SignPayload;
  } catch (error) {
    return null;
  }
};

export const signToken = (payload: SignPayload) => {
  const expiresIn = 7 * 24 * 60 * 60; // days * hours * minutes * seconds = total seconds
  const token = sign(payload, JWT_SECRET, { expiresIn });
  return { token, expiresIn };
};
