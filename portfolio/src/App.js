import {BrowserRouter as  Router} from 'react-router-dom'
import Slidebar from "./components/Navbar/navbar.js"
import MenuHeader from "./components/Menu/menu.js"
import HomepageLayout from "./components/homePage/index.js"
// import Project from "./components/Project/projects"

function App() {
  return (
    <div>

      <Router>
        <HomepageLayout />
        {/* <MenuHeader /> */}
        {/* <Slidebar /> */}
        {/* <Route path="/projects" component={Project} /> */}
      </Router>
    </div>
  );
}

export default App;
