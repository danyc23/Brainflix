import React from "react";
import Header from "./components/Header";
import "./styles/app.css";
import Hero from "./components/Hero";
import VideoPlaylist from "./components/VideoPlaylist";
import VideoDesc from "./components/VideoDescription";

class App extends React.Component {
  state = {
    videoDescription: {
      id: "1",
      title: "BMX Rampage: 201 Highlights",
      description:
        "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      channel: "By Red Cow",
      image: "type of <string>",
      views: "1,001,023",
      likes: "110,985",
      duration: "type of <string>",
      video: "type of <string>",
      timestamp: "12/18/2018",
      comments: [
        {
          image: "",
          name: "Michael Lyons",
          time: "",
          text:
            "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
        },
        {
          image: "",
          name: "Gary Wong",
          time: "",
          text:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        },
        {
          image: "",
          name: "Gary Wong",
          time: "",
          text:
            "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        },
      ],
    },
    sideVideos: [
      {
        id: 1,
        title: "Become A Travel Pro In One Easy Lesson...",
        channel: "Scotty Cranmer",
        image: "./Images/video-list-1.jpg",
      },
      {
        id: 2,
        title: "Les Houches The Hidden Gem Of The...",
        channel: "Scotty Cranmer",
        image: "./Images/video-list-2.jpg",
      },
      {
        id: 3,
        title: "Travel Health Useful Medical Information...",
        channel: "Scotty Cranmer",
        image: "./Images/video-list-3.jpg",
      },
      {
        id: 4,
        title: "Cheap Airline Tickets Great Ways To Save",
        channel: "Emily Harper",
        image: "./Images/video-list-4.jpg",
      },
      {
        id: 5,
        title: "Take A Romantic Break In A Boutique Hotel",
        channel: "Ethan Owen",
        image: "./Images/video-list-5.jpg",
      },
      {
        id: 6,
        title: "Choose The Perfect Accommodations",
        channel: "Lydia Perez",
        image: "./Images/video-list-6.jpg",
      },
      {
        id: 7,
        title: "Cruising Destination Ideas",
        channel: "Timothy Austin",
        image: "./Images/video-list-7.jpg",
      },
      {
        id: 8,
        title: "Train Travel On Track For Safety",
        channel: "Scotty Cranmer",
        image: "./Images/video-list-8.jpg",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <VideoDesc
          desc={this.state.videoDescription}
          comments={this.state.videoDescription.comments}
        />
        <VideoPlaylist videos={this.state.sideVideos} />
      </div>
    );
  }
}

export default App;
