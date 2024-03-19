import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import { ui } from "swagger2-koa";
import yamljs from "yamljs";

import router from "./routes/home";

const app = new Koa();
const swaggerDocument = yamljs.load("api.yaml");
const PORT = process.env.PORT || 5000;

app.use(bodyParser());
app.use(
  cors({
    origin: "*"
  })
);
app.use(logger());

app.use(router.routes());

app
  .use(ui(swaggerDocument, "/swagger"))
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(4000);

const server = app
  .listen(PORT, async () => {
    console.log(`Server listening on port: ${PORT}`);
  })
  .on("error", err => {
    console.error(err);
  });

export default server;
