import { Logger } from "../../packages/shared/logger";

const logger = new Logger(__filename.split('/').pop() as string);

logger.info("Gateway service started.");
