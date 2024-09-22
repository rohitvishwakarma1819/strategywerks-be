import express from "express";
import data from "../data/users.json";
import { User } from "types";

const users = data as User[];

export const getUsers = async (req: express.Request, res: express.Response) => {
  try {
    const limit = parseInt(req.query?.limit as string, 10) || users.length - 1;
    const offset = parseInt(req.query?.offset as string, 10) || 0;

    const filteredUsers = users.slice(
      offset,
      Math.min(offset + limit, users.length - 1)
    );

    res.json(filteredUsers);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
