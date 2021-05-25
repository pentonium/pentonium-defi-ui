import { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="links">
            <a href="">Rewards</a>
            <a href="">Docs</a>
            <div className="btn">Connect</div>
          </div>
          <div className="logo">
            <img
              src="https://pentonium.com/assets/img/logo-pent-invert.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
