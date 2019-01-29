const express = require("express");
let server = express();
server.use("/courses", express.static(__dirname + "/courses"));
server.listen(5000);
