import React, { Component } from "react";
import ScrollIntoView from "react-scroll-into-view";

import "../CSS/scrollDownButton.css";


export default class scrollDownButton extends Component {
   render() {
    return (
      <div className="arrow">
        <ScrollIntoView selector={`#${this.props.scrollToElementId}`}>
          <span></span>
          <span></span>
          <span></span>
        </ScrollIntoView>
      </div>
    );
  }
}
