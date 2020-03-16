import React, { Component } from "react";
import "../CSS/header.css";

export default class header extends Component {
  constructor(props) {
    super(props);
   // console.log(this.props);
  }
  render() {
    return (
      <section id="header">
        <h2 className="ui header left aligned ">
          <div className="content">{this.props.heading}</div>
        </h2>
      </section>
    );
  }
}
