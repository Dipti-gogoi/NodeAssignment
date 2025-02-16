const express = require("express");
const userRouter = express.Router();
const { User } = require("../config/config");

// GET/Retrieve all users
userRouter.get("/users", async (req, res) => {
    try {
        const snapshot = await User.get();
        //mapping over the data and getting the id's with all the data.
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.send(list);
    } catch (error) {
        res.status(500).send({ error: "Error fetching users" });
    }
});

// POST/Add/Create a new user
userRouter.post("/users", async (req, res) => {
    const data = req.body;
    // console.log("Users data: ", data);
    try {
        await User.add(data);
        res.send({ message: "User has been added" });
    } catch (error) {
        res.status(500).send({ error: "Error adding user" });
    }
});

// PUT/Update an existing user by ID
userRouter.put("/users/:id", async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    try {
         // Check if the user id exists
         const userExists = await User.doc(id).get();
         if (!userExists.exists) {
             return res.status(404).send({ error: "User not found" });
         }
        await User.doc(id).update(updatedData);
        res.send({ message: "User has been updated successfully" });
    } catch (error) {
        res.status(500).send({ error: "Error updating user" });
    }
});


// Delete a user by ID
userRouter.delete("/users/:id", async (req, res) => {
    const id = req.params.id;
     try {
        // Check if the user id exists
        const userExists = await User.doc(id).get();
        if (!userExists.exists) {
            return res.status(404).send({ error: "User not found" });
        }
         await User.doc(id).delete();
         res.send({ message: "User has been deleted" });
     } catch (error) {
         res.status(500).send({ error: "Error deleting user" });
     }
 });

module.exports = userRouter; 
