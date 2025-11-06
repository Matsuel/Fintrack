import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";


export const encryptPassword = async (password: string): Promise<string> => {
	const saltRounds = 10;
	const hashedPassword = await bcrypt.hash(password, saltRounds);
	return hashedPassword;
};

export const comparePassword = async (
	password: string,
	hashedPassword: string,
): Promise<boolean> => {
	const isMatch = await bcrypt.compare(password, hashedPassword);
	return isMatch;
};

export const generateToken = (userId: string): string => {
    return jwt.sign({ userId }, process.env.JWT_SECRET as string, { expiresIn: '1d' });
};
