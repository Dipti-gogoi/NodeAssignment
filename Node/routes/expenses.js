const express = require("express");
const expenseRouter = express.Router();
const { Expense } = require("../config/config");

// GET/Retrieve all expenses
expenseRouter.get("/expenses", async (req, res) => {
    try {
        const snapshot = await Expense.get();
        //mapping over the data and getting the id's with all the data.
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.send(list);
        }catch (error) {
        res.status(500).send({ error: "Error fetching expenses" });
        }
});

// POST/Add/Create a new expense
expenseRouter.post("/expenses", async (req, res) => {
       const data = req.body;
    try {
        await Expense.add(data);
        res.send({ message: "Expense has been added" });
        }catch (error) {
            res.status(500).send({ error: "Error adding expense" });
        }
});

// PUT/Update an existing expense by ID
expenseRouter.put("/expenses/:id", async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
     try {
        // Check if the expense id exists
        const expenseExists = await Expense.doc(id).get();
        if (!expenseExists.exists) {
            return res.status(404).send({ error: "Expense not found" });
        }
            await Expense.doc(id).update(updatedData);
            res.send({ message: "Expense has been updated" });
        } catch (error) {
            res.status(500).send({ error: "Error updating Expense" });
        }
 });

// Delete a expense by ID
expenseRouter.delete("/expenses/:id", async (req, res) => {
        const id = req.params.id;
        try {
            // Check if the expense id exists
            const expenseExists = await Expense.doc(id).get();
            if (!expenseExists.exists) {
                return res.status(404).send({ error: "Expense not found" });
            }
            await Expense.doc(id).delete();
            res.send({ message: "Expense has been deleted" });
        } catch (error) {
            res.status(500).send({ error: "Error deleting expense" });
        }
});

module.exports = expenseRouter;