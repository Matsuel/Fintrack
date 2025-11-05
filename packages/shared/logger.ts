import pino from "pino";

// On crée un logger partagé
export const logger = pino({
	level: process.env.LOG_LEVEL || "info",
	transport: {
		target: "pino-pretty", // pour dev, joliment formaté
		options: {
			colorize: true,
			translateTime: "yyyy-mm-dd HH:MM:ss",
		},
	},
});
