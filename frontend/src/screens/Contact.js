import React from "react";

import images from "../assets/images/images.js"

//COMPONENTS
import Header from "../components/Header";

export default class Contact extends React.Component {
  render() {
    //notation passes along all props from the Home component to child components
    return (
        <div className="home-container">
          <Header photo={images.header2} state={this.state} title = "Contact Us"/>
          <div className="sections-container">
          </div>
        </div>
    );
  }
}
