import React from "react";
import { logoutUser } from "../actions/auth";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';

const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const handleClick = (e) => {
    e.preventDefault()
    dispatch(logoutUser())
    history.push("/")
  };

  return (
    <div class="logout">
      <h1>Are You Sure You Want To Logout?</h1>
      <Button variant="contained" size="large" color="gray" href="#" onClick={handleClick}>Yes</Button> <Button variant="contained" size="large" href={"/podcasts"}>No</Button>
    </div> 
  );
};

export default Logout;