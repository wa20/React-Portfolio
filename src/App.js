import { BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import React from 'react';
// import { useState } from "react";
import { render } from 'react-dom';
import Portfolio from "./components/Portfolio";
import About from "./components/About"
import Home from "./components/Home";
import Contact from "./components/Contact"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    
    <Router>
     
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/">
        <Redirect to="/home"></Redirect>
      </Route>
    </Router>
  );
}

export default App;
render(<App />, document.getElementById('root'));
