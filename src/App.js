import React, {Component} from "react";
import { Provider } from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'

//Load final store
import store from "./store";

//Load all containers
import Home from "./containers/home/index.jsx";
import PSP from "./containers/psp/index.jsx";

export default class App extends Component {
  render() {
    return(
      <Router>
          <Provider store={store}>
            <Route path='/' exact component={Home}></Route>
            <Route path='/psp' exact component={PSP}></Route>
          </Provider>
      </Router>
    ) 
  }
}