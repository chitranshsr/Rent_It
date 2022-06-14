import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import CarouselComponent from "./carousel";
import Categories from "./Categories";
import Footer from "./Footer";
import Reviews from "./Reviews";
export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
      <div className="container" style={{height:"100vh"}}>
        {(this.state.userReady) ?
        <div >
          <CarouselComponent/>
          <Categories/>
          <Reviews/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>  
        <Footer/> 
       
       
        
      </div>: null}
      </div>
    );
  }
}
