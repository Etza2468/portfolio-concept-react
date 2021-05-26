import "./App.scss";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PortfolioPage from "./Pages/PortfolioPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
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
