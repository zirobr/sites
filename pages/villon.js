import Pagina from '../components/Pagina';
import textos from '../textos/villon.json';

const Villon = () => {
  
  return (
    <Pagina title={textos.title} heroTitle={textos.heroTitle} linkfotos={textos.fotos}></Pagina>
  );
}

export default Villon