import React from "react";
import Header from "./components/Header";
import "./styles/app.css";
import Hero from "./components/Hero";
import VideoPlaylist from "./components/VideoPlaylist";
import VideoDesc from "./components/VideoDescription";
import axios from "axios";

const apiKey = "0c5593fc-0274-4fea-9733-ba4ce984f521";

class App extends React.Component {
  state = {
    videoDescription: {},
    sideVideos: [],
    commentCount: 0,
  };
  componentDidMount() {
    this.getVideos();
    this.getHeroVideo("1af0jruup5gu");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("component updated", this.props);
    const { id } = this.props.match.params;
    if (id && prevState.videoDescription.id !== id) {
      console.log("the parameter exist");
      this.getHeroVideo(id);
    }
  }

  getVideos() {
    axios
      .get(`http://localhost:2000/videos`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          sideVideos: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getHeroVideo(id) {
    axios
      .get(`http://localhost:2000/videos/${id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          videoDescription: response.data,
          commentCount: response.data.comments.length,
        });
      })
      .catch();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Hero poster={this.state.videoDescription.image} />
        <div className="desc-comments">
          <VideoDesc
            desc={this.state.videoDescription}
            comments={this.state.videoDescription.comments}
            count={this.state.commentCount}
          />
          <VideoPlaylist videos={this.state.sideVideos} />
        </div>
      </div>
    );
  }
}

export default App;
