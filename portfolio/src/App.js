import { BrowserRouter as Router, Route} from "react-router-dom";
import React from 'react';
import { useState } from "react";
import { render } from 'react-dom';
import Portfolio from "./components/Portfolio";
import About from "./components/About"
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/home" component={Home} />
      {/* <Route path="/contact" component={Contact} /> */}
    </Router>
  );
}

export default App;
// render(<App />, document.getElementById('root'));
