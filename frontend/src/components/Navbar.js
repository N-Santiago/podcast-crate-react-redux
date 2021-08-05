import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

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

  return (
    <div className={classes.root}>
      <AppBar position="fixed" 
        classes={{ 
            root: classes.customColor, 
      }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <h1>Podcast Crate</h1>
          </Typography>
          <Button color="inherit" component={Link} href={"/about"}><strong>About</strong></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


// const link = {
//   width: '100px',
//   height: '64px',
//   padding: '12px',
//   margin: '1em 0 2em',
//   background: 'gray',
//   textDecoration: 'none',
//   color: 'white',
// }

// const Navbar = (props) => {
//     return (
//         <div  className="mb-3">
//             <NavLink
//             to="/"
//             exact
//             style={link}
//             activeStyle={{
//                 background: 'gray'
//             }}
//             >Home</NavLink>
//             <NavLink
//             to="/podcasts"
//             exact
//             style={link}
//             activeStyle={{
//                 background: 'gray'
//             }}
//             >Podcasts</NavLink>
//             <NavLink
//             to="/about"
//             exact
//             style={link}
//             activeStyle={{
//                 background: 'gray'
//             }}
//             >About</NavLink>
//         </div>
//     )
// }

// export default Navbar;