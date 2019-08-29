const router = require("express").Router();

const skillsDb = require("../skills/skillsModel");


router.post("/skills", async (req, res) => {
  const skillsData = req.body;

  try {
    const skill = await skillsDb.add(skillsData);
    res.status(201).json(skill);
  } catch (err) {
    res.status(500).json({ message: "Failed to create new skill" });
  }
});

router.put("/skills/:id", async (req, res) => {
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

router.delete("/skills/:id", async (req, res) => {
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
