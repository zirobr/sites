import Pagina from '../components/Pagina';
import textos from '../textos/salgunamu.json';

const Salgunamu = () => {
  
  return (
    <Pagina title={textos.title} heroTitle={textos.heroTitle} linkfotos={textos.fotos}></Pagina>
  );
}

export default Salgunamu