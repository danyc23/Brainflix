import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Upload from "./pages/upload";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/upload" component={Upload} exact />
        <Route path="/videos/:id" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
