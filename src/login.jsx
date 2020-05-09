import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LoginUser } from "./services/login-Service";

class Login extends Component {
  state = {
    user: {
      username: "",
      password: ""
    }
  };
  handleChange = e => {
    const newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser });
    console.log(this.state.user);
  };
  handleLogin = async e => {
    debugger;
    console.log(e);
    e.preventDefault();
    const result = await LoginUser(this.state.user);
    const token = result.data.token;
    window.localStorage.setItem("userToken", token);
    // const cat = window.localStorage.getItem("userToken");
    // console.log(cat);
    if (result) {
      this.props.history.push("/prdListing");
      console.log(result);
      //const token = res.token
      //localStorage.setItem("token", token)
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <form className="login" onSubmit={this.handleLogin}>
            <h4 className="login__header">I'M A RETURNING CUSTOMER</h4>
            <div className="form-group">
              <label htmlFor="">Username or E-mail Address</label>
              <input
                className="form-control"
                type="text"
                name="username"
                id=""
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group login__Password">
              <a className="login__forget-password">(Forget Password?)</a>
              <label htmlFor="">Password</label>
              <input
                className="form-control"
                type="text"
                name="password"
                id=""
                onChange={this.handleChange}
              />
            </div>
            <div className="login__remember-me">
              <div className="form-group__checkbox">
                <input type="checkbox" name="" id="" />
                <span>Remember Me</span>
              </div>
              <div className="add-product__actions">
                <button href="#" className="btn btn--gray">
                  Cancel
                </button>
                <button className="btn btn--primary" type="submit">
                  <Link to="home">Login</Link>
                </button>
              </div>
            </div>
            <Link to="register" className="login__register-now">
              Register Now
            </Link>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
