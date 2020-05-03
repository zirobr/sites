import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Copyright from '../src/Copyright';
import Box from '@material-ui/core/Box';

  
  const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

const Footer = () => {
    const classes = useStyles();

    return(
        <footer className={classes.footer}>
          <Box my={4}>
            <Typography variant="h6" align="center" gutterBottom>
              COMPRE NO ATACADO E PARCELE NO CARTÃO DE CRÉDITO EM ATÉ 6X SEM JUROS
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Acompanhe os lançamentos em nosso APP exclusivo. Compre em várias Marcas. Cuidamos do cadastro, logística e unificamos seu envio.
            </Typography>
            <Copyright />
          </Box>
        </footer>
    )
}

export default Footer