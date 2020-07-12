import React from 'react';
import "./App.css";
import Home from './components/Home';
import about from './components/about';
import detail from './components/detail';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>  
          <Route path="/about" component={about} />
          <Route path="/detail" component={detail} />
          <Route path="/register" component={Register} />
          <Route path="*" component={Home} />
        </Switch>

    </Router>
  );
}

export default App;
