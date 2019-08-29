const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secrets = require("../config/secrets");

const usersDb = require("../users/users-model");
const prisonsDb = require("../prisons/prisonsModel");
const prisonersDb = require("../prisoners/prisonersModel");
const skillsDb = require("../skills/skillsModel");

router.get("/users", (req, res) => {
  usersDb
    .find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/prisons", (req, res) => {
  prisonsDb
    .find()
    .then(prisons => {
      res.status(200).json(prisons);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/prisoners", (req, res) => {
  prisonersDb
    .find()
    .then(prisoners => {
      res.status(200).json(prisoners);
    })
    .catch(error => {
      res.status(500).json({ message: "you dun goofed" });
    });
});

router.get("/skills", (req, res) => {
  skillsDb
    .find()
    .then(skills => {
      res.status(200).json(skills);
    })
    .catch(error => {
      res.status(500).json({ message: "you dun goofed" });
    });
});

router.get("/prisons/:id", (req, res) => {
  const { id } = req.params;

  prisonsDb
    .findById(id)
    .then(prisons => {
      res.status(200).json(prisons);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/prisoners/:id", (req, res) => {
  const { id } = req.params;

  prisonersDb
    .findById(id)
    .then(prisoners => {
      res.status(200).json(prisoners);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/prisoners/:id/skills", (req, res) => {
  const { id } = req.params;

  prisonersDb
    .findById(id)
    .then(prisoner => {
      prisonersDb
        .findSkillsByPrisoner(id)
        .then(skills => {
          res.status(200).json({ ...prisoner, skills });
        })
        .catch(err => {
          res.status(500).json(err);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/skills/:id", (req, res) => {
  const { id } = req.params;

  skillsDb
    .findById(id)
    .then(skills => {
      res.status(200).json(skills);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password);
  user.password = hash;

  usersDb
    .add(user)
    .then(saved => {
      const token = getJwt(saved);
      res.status(201).json({
        saved,
        message: `${saved.username}`,
        token
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  usersDb
    .findByUsername(username)
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = getJwt(user);

        res.status(200).json({
          message: `Welcome ${user.username}`,
          token
        });
      } else {
        res.status(401).json({ message: "Invalid login credentials" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "Error communicating with database" });
    });
});

function getJwt(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "7d"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
