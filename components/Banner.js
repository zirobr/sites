import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import index from '../textos/index.json';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: '#000000',
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    }
  }));


const Banner = () => {
    
    const classes = useStyles();
    return(
      <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h2" variant="h3" align="center" color="primary" gutterBottom>
              {index.titulo}
            </Typography>
            <Typography variant="h5" align="center" color="secondary" paragraph>
              {index.subtitulo}
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    { index.botao }
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
      </div>
    )
}

export default Banner