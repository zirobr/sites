import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Link from '../src/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  list: {
    width: 250,
    backgroundColor: '#000000',
    margin: '15px'
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Typography variant="h6" className={classes.title}>
              <Link href="/" color="primary" >
                MARCAS
              </Link>
            </Typography>
      <Divider />
      <List >
      <Grid container spacing={1}>
        <Grid item xs={12}>
            <Button color="inherit">
              <Link href="/salgunamu" color="secondary">
               Salgunamu
              </Link>
            </Button>
        </Grid>
        <Grid item xs={12}>
            <Button color="inherit">
              <Link href="/annefernandes" color="secondary">
                Anne Fernandes
              </Link>
            </Button>
        </Grid>
        <Grid item xs={12}>
        <Button color="inherit">
              <Link href="/closetdeluxe" color="secondary">
                Closet Deluxe
              </Link>
            </Button>
        </Grid>   
        <Grid item xs={12}>
        <Button color="inherit">
              <Link href="/villon" color="secondary">
                Villon
              </Link>
            </Button>
        </Grid>
        <Grid item xs={12}>
        <Button color="inherit">
              <Link href="/papaya" color="secondary">
                Papaya
              </Link>
            </Button>
        </Grid>
        <Grid item xs={12}>
        <Button color="inherit">
              <Link href="/crisfael" color="secondary">
                Crisfael
              </Link>
            </Button>
        </Grid>
        <Grid item xs={12}>
        <Button color="inherit">
              <Link href="/bmbolsas" color="secondary">
                BM Bolsas
              </Link>
            </Button>
        </Grid>
        <Grid item xs={12}>
        <Button color="inherit">
              <Link href="/bebela" color="secondary">
                Bebela
              </Link>
            </Button>
        </Grid>     
        </Grid>
      </List>
      {/* <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>VER MARCAS</Button>
          <SwipeableDrawer
            
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}