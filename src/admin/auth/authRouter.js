import express from "express";
import asyncWrap from "express-async-wrapper";
import authController from "./authController";


const routes = express.Router();

routes.get('/login', asyncWrap(authController.index));
routes.post('/login', asyncWrap(authController.login));
routes.get('/logout', asyncWrap(authController.logout));

module.exports = routes;