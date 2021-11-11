import React from "react";
import { logoutUser } from "../actions/auth";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'

const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const handleClick = (e) => {
    e.preventDefault()
    dispatch(logoutUser())
    history.push("/")
  };

  const link = {
    width: '100px',
    height: '64px',
    padding: '12px',
    margin: '1em 0 2em',
    background: 'gray',
    textDecoration: 'none',
    color: 'white',
  }

  return (
    <button href="#" style={link} onClick={handleClick}>Logout</button>
  );
};

export default Logout;