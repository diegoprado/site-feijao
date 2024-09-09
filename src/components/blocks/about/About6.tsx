import Megaphone from 'icons/lineal/Megaphone';
import { Tiles5 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn';
// CUSTOM DATA
import { aboutList2 } from 'data/about';

export default function About6() {
  return (
    <div className='row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center'>
      <div className='col-lg-6 position-relative order-lg-2'>
        <Tiles5 />
      </div>

      <div className='col-lg-6'>
        <Megaphone className='icon-svg-md mb-4' />

        <h2 className='display-4 mb-3'>Quem é João Feijão?</h2>

        <p className='lead fs-lg'>
          Candidato a vereador pelo PT, maratonista e líder comunitário
        </p>

        <p className='mb-6'>
          Sou João Feijão, um engenheiro apaixonado por Belo Horizonte. Acredito
          que o esporte, a mobilidade e o cuidado com a cidade são os pilares
          para construirmos um futuro mais justo e vibrante. Ao longo de minha
          trajetória, me dediquei a causas sociais, liderando projetos como a
          Galo Runners. Agora, como pré-candidato a vereador, busco levar minha
          experiência e paixão para a Câmara Municipal, trabalhando para
          transformar a nossa cidade em um lugar melhor para todos.
        </p>

        <ListColumn rowClass='gx-xl-8' list={aboutList2} />
      </div>
    </div>
  );
}
