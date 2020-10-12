import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React, {Component} from "react";
import Landing from "./pages/landing";
import OrphanagesMap from "./pages/orphannages-map";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/app" component={OrphanagesMap}/>
        </Switch>
      </BrowserRouter>
    )
  }
}