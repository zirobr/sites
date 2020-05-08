import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import Link from '../src/Link';
import LazyLoad from 'react-lazy-load';

import index from '../textos/index.json';

//const linkfotos = index.fotos

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '116.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

const Photocards = (props) => {
    const classes = useStyles();
    const {linkfotos} = props
    
    return(
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
            {linkfotos.map((card) => (    
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
              <LazyLoad>
                <CardMedia
                    className={classes.cardMedia}
                    image={card}
                    title="Image title"
                    src="https://catalogo.ziro.app/galeria"
                />
                </LazyLoad>
                <CardContent className={classes.cardContent}>
                    {/* <Typography gutterBottom variant="h5" component="h2">
                      {card[75]+card[76]+card[77]+card[78]}
                    </Typography> */}

                    <Typography>
                      <Link href="https://catalogo.ziro.app/galeria" color="inherit" >
                        Acesse o catálogo para ver os Preços
                      </Link>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="textPrimary">
                    <Link href="https://catalogo.ziro.app/galeria" color="inherit" >
                      VER MARCAS
                    </Link>
                    </Button>
                    <Button size="small" color="textPrimary">
                    <Link href="https://catalogo.ziro.app/cadastrar" color="inherit" >
                      CADASTRAR
                      </Link>
                    </Button>
                </CardActions>
              </Card>
            </Grid>
            ))}
        </Grid>
      </Container>
    )
}

export default Photocards

Photocards.propTypes = {
  linkfotos: PropTypes.array,
};
