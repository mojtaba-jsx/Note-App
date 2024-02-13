import React, { Component } from "react";
import "./ColorBox.css";
class ColorBox extends Component {
  render() {
    return (
      <div
        className="color-box"
        style={{ backgroundColor: `${this.props.name}` }}
      >
        {console.log(this.props.name)}
      </div>
    );
  }
}

export default ColorBox;
