import "dotenv/config";
import { Logger } from "../logger";
import { PrismaClient } from "./generated/prisma/client";

const logger = new Logger(__filename.split('/').pop() as string);

const prisma = new PrismaClient();

logger.info("Prisma Client initialized.");

export default prisma;
