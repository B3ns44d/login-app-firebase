import React, { Component } from "react";
import fire from "./config/fire";
import "./Home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div className="home_container">
        <h1 className="home_login">You are logged in !!!</h1>
        <button onClick={this.logout} className="home_logout">Logout</button>
      </div>
    );
  }
}
export default Home;
