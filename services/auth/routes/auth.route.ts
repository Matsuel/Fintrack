import { Router } from "express";
import loginUser from "../controllers/auth.controller.login";
import logoutUser from "../controllers/auth.controller.logout";
import registerUser from "../controllers/auth.controller.register";

const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.post("/logout", logoutUser);

export default authRouter;