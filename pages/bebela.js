import Pagina from '../components/Pagina';
import textos from '../textos/bebela.json';

const Bebela = () => {
  
  return (
    <Pagina title={textos.title} heroTitle={textos.heroTitle} linkfotos={textos.fotos}></Pagina>
  );
}

export default Bebela