import Container from '@material-ui/core/Container';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Photocards from '../components/Photocards';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import Pixel from '../components/Pixel';

const Pagina = (props) => {
    const { heroTitle, linkfotos } = props;

    return (
        <>
          {/* <Pixel name='FACEBOOK_PIXEL_1' /> */}
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