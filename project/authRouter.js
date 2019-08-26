const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const prisonersDb = require("../project/prisonersModel")
const secrets = require("../config/secrets");

router.get("/users", (req, res) => {
  prisonersDb
    .find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function getJwt(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "8h"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;