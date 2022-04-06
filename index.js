import express from "express";
import morgan from "morgan";
import "dotenv/config";
import databaseConnection from "./src/config/db.js";
import gatewayModule from "./src/routes/gateway.route.js";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

const app = express();

const port = process.env.PORT || 3002;

databaseConnection();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.static("public"));

app.use(
  morgan(
    ":method :url statusCode ===  :status :res[content-length] - :response-time ms"
  )
);

app.use("/gateway", gatewayModule);

app.listen(port, () => {
  console.log(`subscriber connected to ${port}`);
});

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      basePath: "/gateway",
      url: "../swagger.json",
      host: `http://localhost:${port}`,
    },
  })
);
