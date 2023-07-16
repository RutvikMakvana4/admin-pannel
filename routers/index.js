import express from "express";

const routes = express.Router();

routes.use('/admin', require('./admin/index'));

module.exports = routes;