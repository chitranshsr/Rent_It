import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/profile";
import EventBus from "./common/EventBus";


import UpdateProduct from './components/UpdateProduct';
import ListProduct from './components/ListProduct';
import CreateProduct from './components/CreateProduct';
import ViewProduct from './components/ViewProduct';




class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
    
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
       
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
     
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <div className="navba">
          
        <nav className="navbar navbar-expand navbar-light bg-light">
          <Link to={"/profile"} className="navbar-brand">
            RENT-IT
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              
            </li>

           
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
      </div>
        <div className="container mt-3">
           <Switch>
            <Route exact path= "/home" component={Login } />
            <Route exact path={["/","/login"]} component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            
           
           
            <Route path = "/update-product/:id" component = {UpdateProduct}></Route>
            <Route path ="/products" render={ () => <ListProduct/>} />
            <Route path = "/add-product/:id" component = {CreateProduct}></Route>
            <Route path = "/view-product/:id" component = {ViewProduct}></Route>
           
          </Switch>
        </div>

       
      </div>
    );
  }
}

export default App;
