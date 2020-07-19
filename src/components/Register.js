import React, { Component } from "react";
import "../App.css";

import Axios from "axios";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pws: "",
      items:[],
    };
  }
  onClickRegister = () => {
    Axios.post("http://localhost:3080/register", this.state).then(
      (res) => {
        this.setState({
            items: res.data,
        })
      }
    );

    // httpClient.post(server.REGISTER_URL, this.state).then((res) => {
    //   alert(JSON.stringify(res.data))
    // });
  };
  render() {
    return (
      <form>
        <div className="box_color">
          <div className="in_box">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              onChange={(e) => this.setState({ email: e.target.value })}
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              onChange={(e) => this.setState({ pws: e.target.value })}
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              required
            />
            <label htmlFor="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              id="psw-repeat"
              required
            />
            <hr />
            <p>
              By creating an account you agree to our{" "}
              <a href="/">Terms &amp; Privacy</a>.
            </p>
            <button
              type="button"
              className="registerbtn"
              onClick={this.onClickRegister}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    );
  }
}
