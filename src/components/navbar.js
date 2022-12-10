import { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./menuItems";

class Navbar extends Component {
  state = { clicked: false };
  handlechange = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="nav-logo">Travelista</h1>
        <div className="menu-icons" onClick={this.handlechange}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
