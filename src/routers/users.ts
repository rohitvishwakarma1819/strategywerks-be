import express from "express";
import { getUserCount, getUsers } from "../controllers";

export default (router: express.Router) => {
  router.get("/users", getUsers);
  router.get("/users/count", getUserCount);
};
