import React, { Component } from "react";
import { getStyles } from "./ButtonProperties";
class Button extends Component {
  state = { style: {} };
  componentDidMount() {
    const style = getStyles();
    this.setState({ style });
  }
  render() {
    const { style } = this.state;
    return (
      <button className="btn" style={style}>
        hello
      </button>
    );
  }
}

export default Button;
