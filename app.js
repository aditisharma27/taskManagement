const express = require("express");
const app = express();

require("dotenv").config();
require("./conn/conn");
const path = require("path");
const cors = require("cors");
const userAPI = require("./routes/users");
const taskAPI = require("./routes/task");
app.use(cors());
app.use(express.json()); //for sending json format data

app.use("/api/v1", userAPI); //localhost:1000/api/v1/signin
app.use("/api/v2", taskAPI);

// app.get("/", (req, res) => {
//   app.use(express.static(path.resolve(__dirname, "frontend", "build")));
//   res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
// });
app.listen(process.env.PORT, () => {
  console.log("server started at 1000");
});
