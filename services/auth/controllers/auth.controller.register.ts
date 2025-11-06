import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import prisma from "../../../packages/shared/db/client";
import { Logger } from "../../../packages/shared/logger";

const logger = new Logger(__filename.split("/").pop() as string);

const registerUser = async (req: Request, res: Response) => {
	const { username, email, password } = req.body;

	const userExists = await prisma.user.findFirst({
		where: {
			OR: [{ username }, { email }],
		},
	});

	if (userExists) {
		logger.warn(
			`Registration attempt with existing username or email: ${username}, ${email}`,
		);
		return res.status(400).send("Username or email already exists");
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	await prisma.user.create({
		data: {
			username,
			email,
			password: hashedPassword,
		},
	});

	logger.info(`New user registered: ${username} (${email})`);
    res.status(201).send("User registered successfully");
};

export default registerUser;
