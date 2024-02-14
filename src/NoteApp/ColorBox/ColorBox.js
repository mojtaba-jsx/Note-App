import React, { Component } from "react";
import "./ColorBox.css";
class ColorBox extends Component {


clickHandler(color){
  this.props.onColor(color)
}
render() {
    let {color} = this.props
    return (
      <div
        className="color-box"
        onClick={this.clickHandler.bind(this,color)}
        style={{ backgroundColor: color }}
      >
      </div>
    );
  }
}

export default ColorBox;
