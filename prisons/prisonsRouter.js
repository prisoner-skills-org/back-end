const router = require("express").Router();

const prisonsDb = require("../prisons/prisonsModel");

router.get("/", (req, res) => {
  prisonsDb
    .find()
    .then(prisons => {
      res.status(200).json(prisons);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const prison = await prisonsDb.findById(id);

    if (prison) {
      res.json(prison);
    } else {
      res.status(404).json({ message: "Could not find prison with given id." });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to get prison" });
  }
});

router.post("/", async (req, res) => {
  const prisonData = req.body;

  try {
    const prison = await prisonsDb.add(prisonData);
    res.status(201).json(prison);
  } catch (err) {
    res.status(500).json({ message: "Failed to create new prison" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const prison = await prisonsDb.findById(id);

    if (prison) {
      const updatedPrison = await prisonsDb.update(changes, id);
      res.json(updatedPrison);
    } else {
      res.status(404).json({ message: "Could not find prison with given id" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to update prison" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await prisonsDb.remove(id);

    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: "Could not find prison with given id" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to delete prison" });
  }
});

module.exports = router;