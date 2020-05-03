import Pagina from '../components/Pagina';
import textos from '../textos/papaya.json';

const Papaya = () => {
  
  return (
    <Pagina title={textos.title} heroTitle={textos.heroTitle} linkfotos={textos.fotos}></Pagina>
  );
}

export default Papaya