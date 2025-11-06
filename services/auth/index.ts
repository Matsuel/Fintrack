import cors from "cors";
import express from "express";
import { Logger } from "../../packages/shared/logger";
import authRouter from "./routes/auth.route";

const logger = new Logger(__filename.split('/').pop() as string);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);

app.listen(PORT, () => {
	logger.info(`Auth service is running on port ${PORT}`);
});
logger.info("Auth service started.");
