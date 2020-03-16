import React, { Component } from "react";
import { Slider } from "react-semantic-ui-range";
import { Label, Input } from "semantic-ui-react";
import $ from "jquery";

import Star from "../Image/star.png";

import "../CSS/index.css";

import Header from "./header";
import VideoAndAbstract from "./videoAndAbstract";
import ScrollDownButton from "./scrollDownButton";

export default class doppler extends Component {
  state = {
    value: 0
  };

  // minimum settings for slider

  settings = {
    start: 0,
    min: -100,
    max: 100,
    step: 0.01,
    onChange: value => {
      if (value <= -100 || value <= 100) {
        this.setState({ value });
        this.updateImage();
      } else {
        console.log("Value Errorrrr");
      }
    }
  };

  handleValueChange = e => {
    let value = parseInt(e.target.value);
    if (!value) {
      value = 0;
    }
    this.setState({ value: value });
  };

  updateImage = () => {
    let $starImage = $("#star-image");
    let $colorFilter = $("#color-filter");

    let velocity = this.state.value;
    let newImageWidth = 420 + 2 * velocity;
    let newImageHeight = newImageWidth;
    let newFilterWidth = 210 + velocity;
    let newFilterHeight = newFilterWidth;
    let newBlur = "blur(" + Math.floor(50 + velocity / 4) + "px)";
    let newOpacity = Math.abs(velocity / 125);
    let newRGB;

    if (velocity > 0) {
      newRGB = "rgb(255, 0, 0)";
      console.log(newRGB);
    } else {
      newRGB = "rgb(0, 0, 255)";
      console.log(newRGB);
    }

    //update image
    $starImage.css({
      width: newImageWidth,
      height: newImageHeight,
      marginTop: -velocity,
      marginBottom: -velocity
    });

    //update filter
    $colorFilter.css({
      width: newFilterWidth,
      height: newFilterHeight,
      backgroundColor: newRGB,
      opacity: newOpacity,
      filter: newBlur,
      webkitFilter: newBlur,
      mozFilter: newBlur,
      msFilter: newBlur,
      oFilter: newBlur
    });
  };

  render() {
    return (
      <div>

        <section id="main">
          <div className="parallax" style={{ height: "1000px" }}>
            <Header
              heading="Learn More about Doppler Effect"
              id="header"
              style={{ margin: "5rem" }}
            />
            <div id="star-container">
              <img id="star-image" src={Star} alt="Just a star" />
              <div id="color-filter"></div>
            </div>
            <Slider
              id="slider"
              value={this.state.value}
              color="red"
              settings={this.settings}
              style={{
                thumb: {
                  backgroundColor: "purple",
                  width: "20px",
                  height: "20px"
                },
                paddingRight: "15rem",
                paddingLeft: "15rem",
                marginTop: "5rem",
                paddingBottom: "3rem"
              }}
            />

            <Input>
              <Label color="red"> Current Velocity </Label>
              <Input
                label={{ basic: true, content: "Km/S" }}
                labelPosition="right"
                placeholder={`Current Velocity (Km/s) ${this.state.value}`}
                onChange={this.handleValueChange}
                value={Number.parseFloat(this.state.value).toFixed(1)}
                autoFocus
                type="Number"
              />
            </Input>
          </div>
        </section>

        <section id="scrollToView">
          <ScrollDownButton scrollToElementId="bottom" />
        </section>

        <section id = "informationAboutDopplerEffect">
          <div className="parallax" id="bottom" style={{}}>
            <VideoAndAbstract
              url = "https://www.youtube.com/watch?v=dc7l7Qqa8xk"
              abstract="The Doppler effect is of intense interest to astronomers who use the information about the shift in frequency of electromagnetic waves produced by moving stars in our galaxy and beyond in order to derive information about those stars and galaxies. The belief that the universe is expanding is based in part upon observations of electromagnetic waves emitted by stars in distant galaxies. Furthermore, specific information about stars within galaxies can be determined by application of the Doppler effect. Galaxies are clusters of stars that typically rotate about some center of mass point. Electromagnetic radiation emitted by such stars in a distant galaxy would appear to be shifted downward in frequency (a red shift) if the star is rotating in its cluster in a direction that is away from the Earth. On the other hand, there is an upward shift in frequency (a blue shift) of such observed radiation if the star is rotating in a direction that is towards the Earth." />
          </div>

          <div className="parallax" style={{ height: "500px" }}></div>
        </section>
      </div>
    );
  }
}
