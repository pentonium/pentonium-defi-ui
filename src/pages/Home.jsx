import { Component } from "react";
import Header from "../components/common/Header";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <div className="swap-box">
          <div className="tabs">
            <div className="tab active">SWAP</div>
            <div className="tab">LIQUIDITY</div>
          </div>

          <div className="price-dollar">= $0.5</div>
          <div className="token-ticker">PTM</div>
          <div className="input">
            <div>
              <img
                src="https://pentonium.com/assets/img/logo-pent-invert.png"
                alt=""
              />
            </div>
            <input type="text" placeholder="1" />
          </div>
          <div className="reverse">
            <img src="/assets/img/reverse.png" alt="" />
          </div>

          <div className="price-dollar">= $1</div>
          <div className="token-ticker">Dai</div>
          <div className="input">
            <div>
              <img
                src="https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png"
                alt=""
              />
            </div>
            <input type="text" placeholder="1.2" />
          </div>

          <div className="btn btn-block mt-32px">Swap Now</div>

          <div className="info">
            <div className="key">
              Fee:
              <div className="value">0.4 PTM</div>
            </div>
            <div className="key">
              Slippage tolerance:
              <div className="value">0.5%</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
