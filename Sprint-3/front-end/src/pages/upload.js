import React from "react";
import Header from "../components/Header";
import UploadForm from "../components/UploadForm";
import axios from "axios";

class Upload extends React.Component {
  state = {
    title: "",
    description: "",
  };

  handleTitle = (e) => {
    e.preventDefault();
    this.setState({
      title: e.target.value,
    });
  };
  handleDescription = (e) => {
    e.preventDefault();
    this.setState({
      description: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.description) {
      alert("All fields need to be filled!");
    }
    this.postVideo();
    this.setState({
      title: "",
      description: "",
    });
    alert("You posted a video!");
  };

  postVideo() {
    axios.post("http://localhost:5000/videos", {
      title: this.state.title,
      description: this.state.description,
    });
  }

  render() {
    return (
      <section>
        <Header />
        <UploadForm
          handleTitle={this.handleTitle}
          handleDescription={this.handleDescription}
          formData={this.state}
          handleSubmit={this.handleSubmit}
        />
      </section>
    );
  }
}
export default Upload;
