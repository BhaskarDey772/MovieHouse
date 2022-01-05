import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import TvShows from "./Pages/TvShows";
import Search from "./Pages/Search";
import Details from "./Components/Details";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shows" component={TvShows} />
          <Route path="/search/:searchterm" component={Search} />
          <Route path="/movie/:id" exact component={Details} />
          <Route path="/tv/:id" exact component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
