import type { Request, Response } from "express";

const loginUser = (req: Request, res: Response) => {
	res.send("User logged in");
};

export default loginUser;
