import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About/about.js"
import Home from "./components/Home/home.js";

import Footer from "./components/Footer/footer.js";
import { useState } from "react";

function App() {
  // const [activePage, setActivePage] = useState('Home')
  return (
    <main>
      <header>
        {/* <Home/> */}
        <About/>
      </header>
      <div>


      </div>
      <footer>
        {/* <Footer /> */}
      </footer>
    </main>
  );
}

export default App;
