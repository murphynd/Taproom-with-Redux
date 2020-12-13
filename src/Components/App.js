import React from "react";
import Header from "./Header";
import TapRoomControl from "./TapRoomControl";
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // <React.Fragment>
    //   <Header />
    //   <TapRoomControl />
    // </React.Fragment>
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <TapRoomControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
