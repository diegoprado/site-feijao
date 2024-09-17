import Megaphone from 'icons/lineal/Megaphone';
import { Tiles5 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn';
// CUSTOM DATA
import { aboutList2 } from 'data/about';

export default function About6() {
  return (
    <div
      className='row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center'
      id='quem-sou'
    >
      <div className='col-lg-6 position-relative order-lg-2'>
        <Tiles5 />
      </div>

      <div className='col-lg-6'>
        <h2 className='display-4 mb-3'>Quem sou</h2>

        {/* <p className='lead fs-lg'>
          Candidato a vereador pelo PT, maratonista e líder comunitário
        </p> */}

        <p className='mb-6'>
          Eu sou o João Feijão, corredor amador, amante do samba, engenheiro,
          atleticano de coração, morador da zona leste e presidente da Galo
          Runners. Estou no corre por uma BH melhor!
        </p>
        <p className='mb-6'>
          Nasci em Curvelo e, assim como muitos belo-horizontinos, mudei para a
          capital em busca de um futuro melhor. Minha militância começou cedo,
          no movimento estudantil. Na UFMG me engajei ainda mais: participei do
          Grêmio de Engenharia Elétrica, do Diretório Acadêmico da Engenharia e
          tive o privilégio de presidir a Federação Mineira de Empresas
          Juniores, a FEJEMG.
        </p>
      </div>
    </div>
  );
}
