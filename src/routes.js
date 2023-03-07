const routes = require('express').Router()
const {getOne,getAll, post} = require('./controller/employeesController');
//employees routes
routes.get("/employees", getAll)
routes.get("/employees/:id", getOne)
routes.post("/employees/", post)
routes.patch("/employees/");
routes.delete("/employees/:id")

module.exports = routes