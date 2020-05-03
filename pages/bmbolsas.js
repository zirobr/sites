import Pagina from '../components/Pagina';
import textos from '../textos/bmbolsas.json';

const Bmbolsas = () => {
  
  return (
    <Pagina title={textos.title} heroTitle={textos.heroTitle} linkfotos={textos.fotos}></Pagina>
  );
}

export default Bmbolsas