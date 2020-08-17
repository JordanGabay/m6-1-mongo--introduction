"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { getUsers } = require("./exercises/exercise-1.3");
const { addUser } = require("./exercises/exercise-1.4");
const {createGreeting} = require('./exercises/exercise-2')

const PORT = process.env.PORT || 8000;

express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // exercise 1

  // exercise 2

  // handle 404s
  .get("/exercise-1/users", getUsers)
  .get("/*", (req, res) => res.status(404).type("txt").send("🤷‍♂️"))
  .post('/exercise-1/users', addUser)
  .post('/exercise-2/greeting', createGreeting)

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
