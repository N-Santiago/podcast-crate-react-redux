import React from "react";
import { connect } from "react-redux";
import { signupUser } from "../actions/auth";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";

class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    errors: {status: {message: ""}}
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
      .signupUser({ email, password })
      .then(() => this.props.history.push("/podcasts"))
      .catch((errors) => this.setState({ errors }));
  };

  render() {
    return (
      <Box sx={{ p: 2, border: '1px solid grey' }}>
        <form onSubmit={this.handleSubmit}>
          <h1>Sign Up</h1>
          <p>{this.state.errors.status.message}</p>
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
          <Button variant="contained" size="small" color="inherit" type='submit'>Sign Up</Button>
        </form>
      </Box>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (credentials) => dispatch(signupUser(credentials))
  };
};

export default connect(null, mapDispatchToProps)(Signup);