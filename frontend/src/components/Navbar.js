import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import HomeIcon from '@material-ui/icons/Home';

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

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" 
        classes={{ 
            root: classes.customColor, 
      }}
      >
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            Podcast Crate
          </Typography>
          <Button color="inherit" component={Link} href={"/"}><HomeIcon/></Button>
          <Button color="inherit" component={Link} href={"/about"}><strong>About</strong></Button>
          <div>
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

