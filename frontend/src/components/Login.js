import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/index";
import Button from "@material-ui/core/Button";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: false
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props
      .dispatchLoginUser({ email, password })
      .then(() => this.props.history.push("/"))
      .catch(() => this.setState({ error: true }));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Log In</h1>
        <p>{this.state.error && "Invalid email or password"}</p>
        <fieldset>
          <label htmlFor='email'>
            Email:
          </label>
          <input
            type='text'
            name='email'
            id='email'
            onChange={this.handleChange}
            value={this.state.email}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='password'>
            Password:
          </label>
          <input
            type='password'
            name='password'
            id='password'
            onChange={this.handleChange}
            value={this.state.password}
          />
        </fieldset><br/>
        <Button variant="contained" size="small" color="gray" type='submit'>Log In</Button>
      </form>
      
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLoginUser: (credentials) => dispatch(loginUser(credentials))
  };
};

export default connect(null, mapDispatchToProps)(Login);

