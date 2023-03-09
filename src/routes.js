const routes = require('express').Router()
const {getOne,getAll, post, update, Delete} = require('./controller/employeesController');
//employees routes
routes.get("/employees", getAll)
routes.get("/employees/:id", getOne)
routes.post("/employees/", post)
routes.patch("/employees/", update);
routes.delete("/employees/:id",Delete)

module.exports = routes