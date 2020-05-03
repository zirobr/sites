import Pagina from '../components/Pagina';
import textos from '../textos/annefernandes.json';

const Annefernandes = () => {
  
  return (
    <Pagina title={textos.title} heroTitle={textos.heroTitle} linkfotos={textos.fotos}></Pagina>
  );
}

export default Annefernandes