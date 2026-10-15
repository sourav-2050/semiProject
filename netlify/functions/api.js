import serverless from "serverless-http";
import app from "../../server-side/index.js";

export const handler = serverless(app);
