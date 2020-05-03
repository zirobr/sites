import Container from '@material-ui/core/Container';
import Hero from '../components/Hero';
import Photocards from '../components/Photocards';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';

const Pagina = (props) => {
    const { title, heroTitle, linkfotos } = props;

    return (
        <Container maxWidth="xl" disableGutters>
            <Hero heroTitle={heroTitle}/>
            <main>
                <Photocards linkfotos={linkfotos} />
                <Banner />
            </main>
          <Footer />
        </Container>
      );
}

export default Pagina

Pagina.propTypes = {
    title: PropTypes.string,
    heroTitle: PropTypes.string,
    linkfotos: PropTypes.array
  };