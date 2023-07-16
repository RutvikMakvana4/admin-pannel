import express from "express";

const routes = express.Router();

routes.use('/', require("../../src/admin/auth/authRouter"));
routes.use('/', require("../../src/admin/dashboard/dashboardRouter"));




module.exports = routes;