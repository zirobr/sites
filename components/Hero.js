import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Link from '../src/Link';

const fundo = "https://res.cloudinary.com/ziro-br/image/upload/f_auto,q_auto:good,w_800,c_scale/v1588911974/home/capa-anne_sxuapy.jpg"

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroBackground:{
      zIndex: '-100',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url('+fundo+')',
      backgroundSize: 'cover',
      background: 'secondary',
      minHeight: '85Vh',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      opacity: '0.8'
     
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    }));
      
const Hero = (props) => { 
  const { heroTitle } = props;
  const classes = useStyles();

    return(
          <div className={classes.heroBackground}>
              <Container className={classes.heroContent} maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="primary" gutterBottom>
                  Compre {heroTitle} no APP da Ziro
                </Typography>
                <Typography variant="h5" align="center" color="primary" paragraph>
                  Parcele Sem Juros no Cartão
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                    <Button variant="contained"  color="primary">
                      <Link href="https://catalogo.ziro.app/galeria" color="inherit" >
                      CATÁLOGO
                      </Link>
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                      <Link href="https://catalogo.ziro.app/cadastrar" color="inherit" >
                      CADASTRAR
                      </Link>
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
    ) 
}

export default Hero

Hero.propTypes = {
  heroTitle: PropTypes.string,
};
