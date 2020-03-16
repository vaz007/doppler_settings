import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class divider extends Component {
  render() {
    return (
      <div className="ui segments">
        <div className="ui horizontal segments">
          <div className="ui segment" style={{ paddingLeft: "10rem" }}>
            <ReactPlayer url={this.props.url} />
          </div>
          <div className="ui segment" style={{ width: "40%"}}>
            <h3
              className="ui header"
              style={{
                textAlign: "left",
                color: "white",
                fontFamily: "Crimson Text",
                fontSize: "48px"
              }}
            >
              Abstract
            </h3>
            <p
              className="explanation"
              style={{
                textAlign: "left",
                color: "white",
                fontFamily: "Crimson Text",
                fontSize: "20px",
    
              }}
            >
              {this.props.abstract}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
