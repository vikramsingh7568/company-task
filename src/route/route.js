const express = require('express');
const route = express.Router()
const controller = require('../controller/controller')

route.post("/register",controller.Register)

module.exports = route;