const express = require("express");
const incomeRouter = express.Router();
const { Income } = require("../config/config");

// GET/Retrieve all Incomes
incomeRouter.get("/income", async (req, res) => {
    try {
        const snapshot = await Income.get();
        //mapping over the data and getting the id's with all the data.
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.send(list);
    } catch (error) {
        res.status(500).send({ error: "Error fetching Incomes" });
    }
});

// POST/Add/Create a new Income
incomeRouter.post("/income", async (req, res) => {
       const data = req.body;
    try {
        await Income.add(data);
        res.send({ message: "Income has been added" });
    } catch (error) {
        res.status(500).send({ error: "Error adding Income" });
    }
});

// PUT/Update an existing income by ID.
incomeRouter.put("/income/:id", async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
     try {
        // Check if the income id exists
        const incomeExists = await Income.doc(id).get();
        if (!incomeExists.exists) {
            return res.status(404).send({ error: "Income not found" });
        }
         await Income.doc(id).update(updatedData);
         res.send({ message: "Income has been updated" });
     } catch (error) {
         res.status(500).send({ error: "Error updating income", details: error.message });
     }
 });

// Delete an income by ID.
incomeRouter.delete("/income/:id", async (req, res) => {
    const id = req.params.id;
  try {
    // Check if the income id exists
    const incomeExists = await Income.doc(id).get();
    if (!incomeExists.exists) {
        return res.status(404).send({ error: "income not found" });
    }
      await Income.doc(id).delete();
      res.send({ message: "income has been deleted" });
  } catch (error) {
      res.status(500).send({ error: "Error deleting income", details: error.message  });
  }
});

module.exports = incomeRouter;