import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/index";
import Button from "@material-ui/core/Button";
import { Box, Grid, TextField } from "@material-ui/core";

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
      .then(() => this.props.history.push('/podcasts')) 
      .catch(() => this.setState({ error: true }));   
  };
  

  render() {
    return (
      <Box sx={{ 
        p: 2, 
        border: '1px solid grey',
        borderRadius: 5,
        backgroundColor: '#f2f2f2'
        }}>
        <form onSubmit={this.handleSubmit} >
        <Grid container alignItems="center" justifyContent="center" direction="column">
            <Grid item>
              <h3>Log In</h3>
              <p>{this.state.error && "Invalid email or password"}</p>
            </Grid>  
            <Grid item>
              <TextField
                type='email'
                label='Email'
                name='email'
                id='email'
                onChange={this.handleChange}
                value={this.state.email}
              /><br/>
            </Grid><br/> 
            <Grid item>
              <TextField
                label='Password'
                type='password'
                name='password'
                id='password'
                onChange={this.handleChange}
                value={this.state.password}
              /><br/>
            </Grid><br/>
            <Grid item>
              <Button variant="contained" size="small" color="inherit" type='submit'>Log In</Button>
            </Grid>
          </Grid>  
        </form>
      </Box>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLoginUser: (credentials) => dispatch(loginUser(credentials))
  };
};

export default connect(null, mapDispatchToProps)(Login);


