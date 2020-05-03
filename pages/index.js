import Pagina from '../components/Pagina';
import textos from '../textos/index';

const Index = () => {

  return (
    <Pagina title={textos.title} heroTitle={textos.heroTitle} linkfotos={textos.fotos}></Pagina>
  );
}

export default Index
