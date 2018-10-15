import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="layout">
          <div className="header">MEGAN</div>
          <div className="subheader">This is me!</div>
          <div className="content">
            <div className="content_title" />
            <div className="content_body">
              <div className="content_body">
                <div className="listitem">Discovery</div>
                <div className="listitem">Collaberate</div>
                <div className="listitem">Design</div>
                <div className="listitem">Reserve</div>
                <div className="listitem">Stay in Touch</div>
                <div className="listitem">Experience</div>
                <div className="listitem">Share</div>
              </div>
            </div>
          </div>
          <div className="footer">Footer</div>
        </div>
      </div>
    );
  }
}

export default App;
