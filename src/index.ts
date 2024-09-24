import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import routers from "./routers";
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/", routers());

const server = http.createServer(app);

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
