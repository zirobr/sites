import Pagina from '../components/Pagina';
import textos from '../textos/closetdeluxe.json';

const Closetdeluxe = () => {
  
  return (
    <Pagina title={textos.title} heroTitle={textos.heroTitle} linkfotos={textos.fotos}></Pagina>
  );
}

export default Closetdeluxe