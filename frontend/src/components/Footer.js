import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
          Norberto Santiago&nbsp;
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        position: 'fixed',
        bottom: 0,
        marginTop: 10,
    },
  }));

  export default function Footer() {
    const classes = useStyles();
  
    return (
        <BottomNavigation className={classes.footer}>
          <Copyright />
        </BottomNavigation>
    );
}