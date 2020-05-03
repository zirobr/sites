import Container from '@material-ui/core/Container';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Photocards from '../components/Photocards';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';

const Pagina = (props) => {
    const { heroTitle, linkfotos } = props;

    return (
        <>
          <Navbar title="ZIRO" />  
          <Container maxWidth="xl" disableGutters>
              <Hero heroTitle={heroTitle}/>
              <main>
                  <Photocards linkfotos={linkfotos} />
                  <Banner />
              </main>
            <Footer />
          </Container>
        </>
      );
}

export default Pagina

Pagina.propTypes = {
    heroTitle: PropTypes.string,
    linkfotos: PropTypes.array
  };