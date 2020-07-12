import React, { Component } from "react";
import Axios from "axios";
export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          pws: "",
          items:[],
        };
      }
  onClikLogin = () => {

  };
  render() {
    const {items} = this.state;
    return (
        
      <div>
          {items.map((item, index) => (
              <li>{item.result}</li>
          ))}
        <div className="row">
          <div className="col-lg-3 col-md-2" />
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-key">
              <i className="fa fa-key" aria-hidden="true" />
            </div>
            <div className="col-lg-12 login-title">ADMIN PANEL</div>
            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <form>
                  <div className="form-group">
                    <label className="form-control-label">USERNAME</label>
                    <input type="text" className="form-control" name="email" onChange={(e) => this.setState({ email: e.target.value })}/>
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">PASSWORD</label>
                    <input type="password" className="form-control" name="pws" onChange={(e) => this.setState({ pws: e.target.value })}/>
                  </div>
                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text">
                    </div>
                    <div className="col-lg-6 login-btm login-button">
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={this.onClikLogin}
                      >
                        LOGIN
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-2" />
          </div>
        </div>
      </div>
    );
  }
}
