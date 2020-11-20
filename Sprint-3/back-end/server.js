const express = require("express");
const app = express();
const videos = require("./routes/videos");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/videos", videos);

app.listen(5000, (request, response) => {
  console.log("Server is Running");
});
