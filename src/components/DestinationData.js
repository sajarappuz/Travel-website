import { Component } from "react";
import "./Destination.css";

import Philippine1 from "../assets/sea sight.jpg";
import Philippine2 from "../assets/beach.jpg";
class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>{" "}
        </div>
        <div className="des-image">
          <img src={this.props.img1} alt="/" />
          <img src={this.props.img2} alt="/" />
        </div>
      </div>
    );
  }
}
export default DestinationData;
