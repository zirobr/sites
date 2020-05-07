import Pagina from '../components/Pagina';
import textos from '../textos/hush.json';

const Hush = () => {
  
  return (
    <Pagina title={textos.title} heroTitle={textos.heroTitle} linkfotos={textos.fotos}></Pagina>
  );
}

export default Hush