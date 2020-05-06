import Pagina from '../components/Pagina';
import textos from '../textos/loubucca.json';

const Loubucca = () => {
  
  return (
    <Pagina title={textos.title} heroTitle={textos.heroTitle} linkfotos={textos.fotos}></Pagina>
  );
}

export default Loubucca