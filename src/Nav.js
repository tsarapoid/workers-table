import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";
import * as paths from '../src/router/path';



class Nav extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>Quantum Accounting</h2>
            <ul className="header">
            <li><NavLink exact to={paths.MAIN}>Ввод</NavLink> </li>
            <li><NavLink to={paths.BLOG}>Список</NavLink></li>
            <li><NavLink to={paths.CONTACT}>Категории</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path={paths.MAIN} component={Home} />
            <Route path={paths.BLOG} component={Blog} />
            <Route path={paths.CONTACT} component={Contact} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Nav;