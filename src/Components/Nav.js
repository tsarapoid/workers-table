import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from ".//Home";
import Blog from "./Blog";
import Contact from "./Contact";


class Nav extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>Quantum Accounting</h2>
            <ul className="header">
            <li><NavLink exact to="/">Ввод</NavLink> </li>
            <li><NavLink to="/Blog">Список</NavLink></li>
            <li><NavLink to="/Contact">Категории</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Nav;