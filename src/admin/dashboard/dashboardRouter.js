import express from "express";
import asyncWrap from "express-async-wrapper";
import dashboardController from "./dashboardController";

const routes = express.Router();

routes.get('/dashboard', asyncWrap(dashboardController.dashboard));

routes.get('/add', asyncWrap(dashboardController.add));

routes.get('/view', asyncWrap(dashboardController.view));


module.exports = routes;