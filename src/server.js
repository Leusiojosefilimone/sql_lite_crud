const express = require("express");
var app = express();
app.use(express.json())
const routes = require('./routes')

const HTTP_PORT = 8000
app.listen(HTTP_PORT, () => {
    console.log("Server is listening on port " + HTTP_PORT);
});

// Add Access Control Allow Origin headers
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
app.use(routes)


