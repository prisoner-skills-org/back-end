const router = require("express").Router();

const skillsDb = require("../skills/skillsModel");

router.get("/", (req, res) => {
  skillsDb
    .find()
    .then(skills => {
      res.status(200).json(skills);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const skill = await skillsDb.findById(id);

    if (skill) {
      res.json(skill);
    } else {
      res.status(404).json({ message: "Could not find that skill with given id." });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to get skill" });
  }
});

router.post("/", async (req, res) => {
  const skillsData = req.body;

  try {
    const skill = await skillsDb.add(skillsData);
    res.status(201).json(skill);
  } catch (err) {
    res.status(500).json({ message: "Failed to create new skill" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const skill = await skillsDb.findById(id);

    if (skill) {
      const updateSkill = await skillsDb.update(changes, id);
      res.json(updateSkill);
    } else {
      res.status(404).json({ message: "Could not find that skill with given id" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to update skill" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await skillsDb.remove(id);

    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: "Could not find that skill with given id" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to delete skill" });
  }
});

module.exports = router;
