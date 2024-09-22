import express from "express";
import getUsers from "./users";
const router = express.Router();

export default (): express.Router => {
  getUsers(router);

  return router;
};
