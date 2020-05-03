import Pagina from '../components/Pagina';
import textos from '../textos/crisfael.json';

const Crisfael = () => {
  
  return (
    <Pagina title={textos.title} heroTitle={textos.heroTitle} linkfotos={textos.fotos}></Pagina>
  );
}

export default Crisfael