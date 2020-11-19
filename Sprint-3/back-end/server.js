const express = require("express");
const app = express();
const videos = require("./routes/videos");

app.use("/videos", videos);

app.listen(8080, (request, response) => {
  console.log("Server is Running");
});
