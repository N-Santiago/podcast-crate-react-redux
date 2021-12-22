import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Button, Link, MenuItem, Menu } from '@material-ui/core/';
import HomeIcon from '@material-ui/icons/Home';
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  customColor: {
    backgroundColor: "gray"
  },
}));

export default function NavBar() {
  
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const loggedIn = useSelector(state => state.auth.loggedIn)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar 
        position="fixed" 
        classes={{ 
            root: classes.customColor, 
        }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title} >
            <strong>Podcast Crate</strong>
          </Typography>
          <div className={classes.buttons}>
            <Button color="inherit" href={"/"}><HomeIcon/></Button>
            <Button color="inherit" href={"/about"}><strong>About</strong></Button>
            <Button color="inherit" href={"/login"}><strong>Login</strong></Button>
            <Button color="inherit" href={"/signup"}><strong>Signup</strong></Button> 
            <Button color="inherit" href={"/logout"}><strong>Logout</strong></Button>
            <Button
              roboto-label="podcasts"
              roboto-controls="menu-appbar"
              roboto-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <strong>Podcasts</strong>
            </Button> 
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem color="inherit" component={Link} href={"/podcasts"} onClick={handleClose}>Podcasts</MenuItem>
              <MenuItem color="inherit" component={Link} href={"/podcasts/new"} onClick={handleClose}>New</MenuItem>
            </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
