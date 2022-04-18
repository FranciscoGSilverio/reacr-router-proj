import React from "react";
import "./assets/css/base/base.css";

import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Pagina404 from "./paginas/Pagina404";
import Header from "./components/Header";
import Posts from "./paginas/Posts";
import Category from "./paginas/Category";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/categoria/:id">
          <Category />
        </Route>
        <Route path="/posts/:id">
          <Posts />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
