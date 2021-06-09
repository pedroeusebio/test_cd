"use strict";

const express = require("express");

const PORT = 5000;
const HOST = "0.0.0.0";

express()
  .get("/", (req, res) => res.send("Hello World!"))
  .listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
