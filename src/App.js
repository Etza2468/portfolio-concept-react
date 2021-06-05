import "./App.scss";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PortfolioPage from "./Pages/PortfolioPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
          </Switch>
          <Switch>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
          </Switch>
          <Switch>
            <Route path="/portfolio" exact>
              <PortfolioPage />
            </Route>
          </Switch>
          <Switch>
            <Route path="/blog" exact>
              <BlogPage />
            </Route>
          </Switch>
          <Switch>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
