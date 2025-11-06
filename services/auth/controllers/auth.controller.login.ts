import type { Request, Response } from "express";
import prisma from "../../../packages/shared/db/client";
import { Logger } from "../../../packages/shared/logger";
import { comparePassword, generateToken } from "../utils/encrypt";

const logger = new Logger(__filename.split("/").pop() as string);

const loginUser = async (req: Request, res: Response) => {
	const { username, password } = req.body;

	const user = await prisma.user.findFirst({ where: { username } });

	if (!user) {
		logger.warn(`Login failed: Incorrect credentials ${username}`);
		return res.status(401).send({ message: "Invalid username or password" });
	}

	const isMatch = await comparePassword(password, user.password);

	if (!isMatch) {
		logger.warn(`Login failed: Incorrect credentials ${username}`);
		return res.status(401).send({ message: "Invalid username or password" });
	}

	logger.info(`User ${username} logged in successfully`);

	const token = generateToken(user.id);

	res.status(200).send({ message: "Login successful", token });
};

export default loginUser;
