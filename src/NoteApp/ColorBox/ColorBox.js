import React, { Component } from "react";
import "./ColorBox.css";
class ColorBox extends Component {


clickHandler(color){
  this.props.onColor(color)
}

  render() {
    return (
      <div
        className="color-box"
        onClick={this.clickHandler.bind(this,this.props.name)}
        style={{ backgroundColor: `${this.props.name}` }}
      >
      </div>
    );
  }
}

export default ColorBox;
