import React, { Component } from "react";
import Home from "./Home";
import about from "./about";
import detail from "./detail";
import Register from "./Register";
import Login from "./login";
import '../App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            {/* Links */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  หน้าหลัก
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  เกี่ยวกับ
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  เข้าสู่ระบบ
                </Link>
              </li>
             <li classname="nav-item" style={{color: 'dodgerblue'}}>ยินดีตอนรับ</li>

            </ul>
          </nav>
        </div>
        <div className="container" />
        <Switch>
          <Route path="/about" component={about} />
          <Route path="/detail" component={detail} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    );
  }
}
