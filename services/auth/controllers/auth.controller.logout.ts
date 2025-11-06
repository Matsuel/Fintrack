import type { Request, Response } from 'express';

const logoutUser = (req: Request, res: Response) => {
    res.send("User logged out");
};

export default logoutUser;
