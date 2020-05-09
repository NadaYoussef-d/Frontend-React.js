import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RegisterUser } from "./services/register-Service";

class Register extends Component {
  state = {
    user: { username: "", password: "", confirmPassword: "" }
  };

  handleChange = e => {
    const newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser });
    console.log(this.state.user);
  };

  handleRegister = async e => {
    e.preventDefault();
    const result = await RegisterUser(this.state.user);
    console.log(result);
    if (result) {
      this.props.history.push("/login");
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <form className="login" onSubmit={this.handleRegister}>
            <h4 className="login__header">Register An Account</h4>
            <div className="form-group">
              <label htmlFor="">Username</label>
              <input
                className="form-control"
                type="text"
                name="username"
                id=""
                onChange={this.handleChange}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  className="form-control"
                  type="text"
                  name="password"
                  id=""
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Re-enter Password</label>
                <input
                  className="form-control"
                  type="text"
                  name="confirmPassword"
                  id=""
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="login__remember-me">
              <div className="add-product__actions">
                <button className="btn btn--gray">Cancel</button>
                <button className="btn btn--primary" type="submit">
                  {/* <Link to="home"> */}
                  Register
                  {/* </Link> */}
                </button>
              </div>
            </div>
            <Link to="login" className="login__register-now">
              You are alredy a member?
            </Link>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
