const express = require("express");
const database = require("../database");

const router = express.Router({ mergeParams: true });

const protectedPath = (req, res, next) => {
  const apiKey = req.headers["api-key"];
  if (apiKey !== "password") {
    res.status(401).send("Unauthorized");
  } else {
    next();
  }
};

router.use(protectedPath);

// GET /users
router.get("/users", (req, res) => {
  res.json(database.users);
});

router.get("/database", (req, res) => {
  res.json(database);
});

module.exports = router;
