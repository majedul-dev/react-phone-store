import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from "./components/Nav";
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/CartComp/Cart';
import Default from './components/Default';
import Modal from './components/Modal'


class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route exact path='/' component={ProductList}/>
          <Route path='/details' component={Details}/>
          <Route path='/cart' component={Cart}/>
          <Route component={Default}/>
        </Switch>
        <Modal />
      </>
    );
  };
};

export default App;
