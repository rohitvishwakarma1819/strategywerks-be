import { Request, Response } from "express-serve-static-core";

export const mockRequest = {} as Request;
export const mockResponse = {
  send: jest.fn(),
  json: jest.fn(),
  sendStatus: jest.fn(),
} as unknown as Response;
