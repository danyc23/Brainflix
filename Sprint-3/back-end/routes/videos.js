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
    return videoWithId.shift();
  } else {
    return `No video found with the id: ${id}`;
  }
};

router.get("/", (request, response) => {
  const listOfVideos = videoArr();
  response.json(videoArr());
});

// posting a new video
router.post("/", (request, response) => {
  if (!request.body.title || !request.body.description) {
    response.status(400).json({ msg: "Bad request" });
  }
  const newVideo = {
    id: uuidv4(),
    title: request.body.title,
    image: "https://picsum.photos/id/237/500/600",
    description: request.body.description,
    channel: " By Daniel Coulson",
    views: "9,001,100",
    likes: "330,955",
    timestamp: "19/11/2020",
    comments: [
      {
        image: "../public/Images/silver.png",
        name: "Edwin Coulson",
        timestamp: "12/18/2020",
        comment: "This is fantastic",
      },
      {
        image: "../public/Images/silver.png",
        name: "Arianna Cruz",
        timestamp: "12/18/2020",
        comment: "I love coding!",
      },
      {
        image: "../public/Images/silver.png",
        name: "Tatiana Charris",
        timestamp: "12/18/2020",
        comment: "I dont like coding!",
      },
    ],
  };
  const oldVideoArray = videoArr();
  console.log("Old video array", oldVideoArray);
  oldVideoArray.push(newVideo);
  fs.writeFileSync(videosData, JSON.stringify(oldVideoArray));
  response.json(newVideo);
});

//responding to
router.get("/", (request, response) => {
  response.json();
});

router.get("/:id", (request, response) => {
  let selectedVideo = getVideoById(request.params.id);
  response.json(selectedVideo);
});

module.exports = router;
