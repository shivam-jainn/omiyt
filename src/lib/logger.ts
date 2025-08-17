import winston from "winston";

// File transport for logs (default)
const fileTransport = new winston.transports.File({
  filename: 'logs/auth-events.log',
  format: winston.format.json(),
});

// To swap to PostgreSQL, replace fileTransport with a custom transport:
// import { PostgresTransport } from './your-postgres-transport';
// const dbTransport = new PostgresTransport({ ... });

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [fileTransport],
});

export default logger;
