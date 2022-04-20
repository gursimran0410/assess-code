import "./styles.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const homeComponent = React.lazy(() => import("./modules/homePage"));

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route name="home" exact path="/" component={homeComponent} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}
