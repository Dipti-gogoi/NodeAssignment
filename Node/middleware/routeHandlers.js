// Importing individual route files
const usersRoutes = require("../routes/users");
const expenseRoutes = require("../routes/expenses");
const incomeRoutes = require("../routes/income");

// Exporting a function to set up route handlers
module.exports = (app) => {
    app.use("/", usersRoutes);
    app.use("/", expenseRoutes);
    app.use("/", incomeRoutes);
};
