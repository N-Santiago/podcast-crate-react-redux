import React from "react";
import { connect } from "react-redux";
import { signupUser } from "../actions/auth";
import { Button, Box, TextField, Grid } from "@material-ui/core";

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
      <Box sx={{ 
        p: 2, 
        border: '1px solid grey',
        borderRadius: 5,
        backgroundColor: '#f2f2f2'
        }}>
        <form onSubmit={this.handleSubmit}>
        <Grid container alignItems="center" justifyContent="center" direction="column">
          <Grid item>
            <h3>Sign Up</h3>
            <p>{this.state.errors.status.message}</p>
          </Grid>  
          <Grid item>
            <TextField
              type='email'
              label='Email'
              name='email'
              id='email'
              onChange={this.handleChange}
              value={this.state.email}
            />
            </Grid><br/>
          <Grid item>
            <TextField
              type='password'
              label='Password'
              name='password'
              id='password'
              onChange={this.handleChange}
              value={this.state.password}
            />
            </Grid><br/>
          <Grid item>
            <Button variant="contained" size="small" color="inherit" type='submit'>Sign Up</Button>
          </Grid>
          </Grid>
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