require('dotenv').config();
let express = require("express"); 
let app = express();
app.use(express.json());
app.use(express.static("public"));
// Importing the route handlers middleware
const routesMiddleware = require("./middleware/routeHandlers");

routesMiddleware(app);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

// Geting the port from environment variables or use 3000 as a default
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
