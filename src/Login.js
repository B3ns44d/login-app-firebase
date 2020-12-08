import React, { Component } from "react";
import fire from "./config/fire";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }
  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  componentDidMount() {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  }
  render() {
    return (
      <div>
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form>
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="/#" className="social">
                  <i>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </i>
                </a>
                <a href="/#" className="social">
                  <i>
                    <FontAwesomeIcon icon={faGoogle} />
                  </i>
                </a>
                <a href="/#" className="social">
                  <i>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <input
                name="password"
                type="password"
                onChange={this.handleChange}
                id="password"
                placeholder="Password"
                value={this.state.password}
              />
              <button onClick={this.signup}>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form>
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="/#" className="social">
                  <i>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </i>
                </a>
                <a href="/#" className="social">
                  <i>
                    <FontAwesomeIcon icon={faGoogle} />
                  </i>
                </a>
                <a href="/#" className="social">
                  <i>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </i>
                </a>
              </div>
              <span>or use your account</span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <input
                name="password"
                type="password"
                onChange={this.handleChange}
                id="password"
                placeholder="Password"
                value={this.state.password}
              />
              <a href="/#">Forgot your password?</a>
              <button onClick={this.login}>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <form>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter email address"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            id="password"
            placeholder="enter password"
            value={this.state.password}
          />
          <button onClick={this.login}>Login</button>
          <button onClick={this.signup}>Signup</button>
        </form> */}
      </div>
    );
  }
}
export default Login;
