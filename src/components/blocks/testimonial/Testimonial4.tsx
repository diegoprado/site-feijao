// GLOBAL CUSTOM COMPONENTS
import Carousel from 'components/reuseable/Carousel';
import { TestimonialCard3 } from 'components/reuseable/testimonial-cards';
// CUSTOM UTILS LIBRARY FUNCTIONS
import carouselBreakpoints from 'utils/carouselBreakpoints';
// CUSTOM DATA
import { testimonialList2 } from 'data/testimonial-list';

export const depoimentos = [
  {
    name: 'Josy Mendes',
    image: '/img/testimonials/josy_mendes.jpg',
    review: `Conheço o Feijão há 8 anos, e são inúmeras as razões que o farão ter o meu voto para vereador em BH: sua pauta com a corrida de rua, sua maneira de se relacionar com as pessoas, sua forma objetiva de agir, de fazer, ou seja, sua capacidade de trabalho incrível, que eu acredito.`,
  },
  {
    name: 'Bruno Scarpelli',
    image: '/img/testimonials/bruno_scarpelli.jpg',
    review: `Conheço o Feijão há uns bons anos. Sempre acompanhei sua forma de pensar, se posicionar, sempre com temas coletivos em prol do bem comum. Estou convencido que votar no Feijão para vereador de Belo Horizonte é uma decisão acertada, estou convicto que será um cara que nos representará com muita responsabilidade no legislativo municipal. Pra cima Feijão, rumo a Câmara Municipal de BH 2025/2028, nossa cidade só tem a ganhar!`,
  },
  {
    name: 'Eloisinho',
    image: '/img/testimonials/eloisinho.jpg',
    review: `O Feijão é o melhor candidato a vereador de BH porque é conhecedor dos desafios e falta de apoio quando o tema é esporte. Esporte conversa diretamente com a melhoria da saúde! Então eu tô com Feijão!`,
  },
  {
    name: 'Sávio José',
    image: '/img/testimonials/savio_jose.jpg',
    review: `Conheço o Feijão há mais de 20 anos. Nesse tempo fui acompanhando seu interesse e amadurecimento político. O esporte sempre esteve presente em sua vida. Mais tarde, assim como aconteceu comigo, o debate racial ganhou protagonismo em nossas existências. Eleger o Feijão para a Câmara de BH é ter a certeza de um vereador antirracista, comprometido com o esporte, com o lazer, com a mobilidade urbana e o direito à cidade!`,
  },
];

export default function Testimonial4() {
  return (
    <div className='wrapper bg-light'>
      <div className='container py-14 py-md-16'>
        <div className='row'>
          <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center'>
            <h2 className='display-4 mb-6 px-xl-10 px-xxl-15'>
              TIME DO FEIJÃO
            </h2>
          </div>
        </div>

        <div className='swiper-container dots-closer mb-6'>
          <Carousel
            spaceBetween={0}
            grabCursor
            navigation={false}
            breakpoints={carouselBreakpoints}
          >
            {depoimentos.map((item, i) => (
              <div className='item-inner' key={i}>
                <TestimonialCard3 {...item} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
