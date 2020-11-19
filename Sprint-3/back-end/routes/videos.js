const express = require("express");
const router = express.Router();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const videosData = path.join(__dirname, "../data/videos.json");

//Making it an array of videos and as javascript objects with json parse
const videoArr = () => {
  const videos = fs.readFileSync(videosData);
  return JSON.parse(videos);
};
//getting video with an id
const getVideoById = (id) => {
  //calling the function to bring the array of objects
  const videos = videoArr();
  // filter through the array so I can look for the id
  const videoWithId = videos.filter((video) => id === video.id);
  if (videoWithId.length) {
    return videoWithId;
  } else {
    return `No video found with the id: ${id}`;
  }
};

// posting a new video
router.post("/", (request, response) => {
  if (!request.body.title || !request.body.image || !request.body.description) {
    response.status(400).json({ msg: "Bad request" });
  }
  const newVideo = {
    id: uuidv4(),
    title: request.body.title,
    image: request.body.image,
    description: request.body.description,
  };
  const oldVideoArray = videoArr();
  const newVideoArray = oldVideoArray.push(newVideo);
  fs.writeFileSync(videosData, JSON.stringify(newVideoArray));
  response.json(newVideoArray);
});

//responding to
router.get("/", (request, response) => {
  response.json();
});

router.get("/:id", (request, response) => {
  response.send("Hello Getting from id");
});
module.exports = router;
