import app from "./app";
import { logger } from "./lib/logger";

const port = Number(process.env.PORT || 8787);
if (!Number.isFinite(port) || port <= 0) throw new Error(`Invalid PORT: ${port}`);

app.listen(port, (err) => {
  if (err) {
    logger.error({ err }, "Error listening on port");
    process.exit(1);
  }
  logger.info({ port }, "MarketPulse API listening");
});
