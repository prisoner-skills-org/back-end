const router = require("express").Router();

const prisonersDb = require("../prisoners/prisonersModel");


router.post("/prisoners", async (req, res) => {
  const prisonerData = req.body;

  try {
    const prisoner = await prisonersDb.add(prisonerData);
    res.status(201).json(prisoner);
  } catch (err) {
    res.status(500).json({ message: "Failed to create new prisoner" });
  }
});

router.put("/prisoners/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const prisoner = await prisonersDb.findById(id);

    if (prisoner) {
      const updatedPrisoner = await prisonersDb.update(changes, id);
      res.json(updatedPrisoner);
    } else {
      res.status(404).json({ message: "Could not find prisoner with given id" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to update prisoner" });
  }
});

router.delete("/prisoners/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await prisonersDb.remove(id);

    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: "Could not find prisoner with given id" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to delete prisoner" });
  }
});

module.exports = router;
