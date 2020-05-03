import AppBar from '@material-ui/core/AppBar';
//import CameraIcon from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Link from '../src/Link';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import Menu from '../components/Menu';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    // target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? "primary" : "transparent"
  });
}

const Navbar = (props) => {
    const { title } = props;
    const classes = useStyles();

    return(
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar>
            {/* <CameraIcon className={classes.icon} /> */}
            <Typography variant="h6" className={classes.title}>
              <Link href="/" color="textPrimary" >
                {title}
              </Link>
            </Typography>
            <Menu />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    )
}

export default Navbar

Navbar.propTypes = {
    title: PropTypes.string,
  };
