import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Error from "./component/Error";
import WeatherDisplay from "./component/WeatherDisplay";
import Navigation from "./component/Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navigation />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Weather" component={WeatherDisplay} />
              <Route path="*" component={Error} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
