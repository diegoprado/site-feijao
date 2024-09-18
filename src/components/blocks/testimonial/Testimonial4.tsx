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
    socialLink: {
      label: 'sendojosy',
      url: 'https://www.instagram.com/sendojosy',
    },
  },
  {
    name: 'Bruno Scarpelli',
    image: '/img/testimonials/bruno_scarpelli.jpg',
    review: `Conheço o Feijão há uns bons anos. Sempre acompanhei sua forma de pensar, se posicionar, sempre com temas coletivos em prol do bem comum. Estou convencido que votar no Feijão para vereador de Belo Horizonte é uma decisão acertada, estou convicto que será um cara que nos representará com muita responsabilidade no legislativo municipal. Pra cima Feijão, rumo a Câmara Municipal de BH 2025/2028, nossa cidade só tem a ganhar!`,
    socialLink: {
      label: 'brunoscarpelli13',
      url: 'https://www.instagram.com/brunoscarpelli13',
    },
  },
  {
    name: 'Eloisinho',
    image: '/img/testimonials/eloisinho.jpg',
    review: `O Feijão é o melhor candidato a vereador de BH porque é conhecedor dos desafios e falta de apoio quando o tema é esporte. Esporte conversa diretamente com a melhoria da saúde! Então eu tô com Feijão!`,
    socialLink: {
      label: 'eloisinho',
      url: 'https://www.instagram.com/eloisinho',
    },
  },
  {
    name: 'Sávio José',
    image: '/img/testimonials/savio_jose.jpg',
    review: `Conheço o Feijão há mais de 20 anos. Nesse tempo fui acompanhando seu interesse e amadurecimento político. O esporte sempre esteve presente em sua vida. Mais tarde, assim como aconteceu comigo, o debate racial ganhou protagonismo em nossas existências. Eleger o Feijão para a Câmara de BH é ter a certeza de um vereador antirracista, comprometido com o esporte, com o lazer, com a mobilidade urbana e o direito à cidade!`,
    socialLink: {
      label: 'saviojose13',
      url: 'https://www.instagram.com/saviojose13',
    },
  },
  {
    name: 'Ester Alves',
    image: '/img/testimonials/ester_alves.jpg',
    review: `Feijão é um cara bacana, simples e que está com muita energia pra fazer diferença na Câmara Municipal! Tanto na educação, transporte público e também na área de esporte e cultura! Por isso meu apoio a ele em 2024.`,
    socialLink: {
      label: 'estercalves',
      url: 'https://www.instagram.com/estercalves',
    },
  },
  {
    name: 'Vitória Diniz',
    image: '/img/testimonials/vitoria_diniz.jpg',
    review: `Como muitos e muitos BH afora, conheci Feijão por meio da torcida do Galo. Sempre foi um cara do qual ouvi falar bem, cercado de amigos, querido por onde passasse! Quando nos tornamos amigos, tudo isso foi confirmado. Além disso,  Feijão sempre esteve ativo, interessado e presente nas frentes de luta pelo povo, pela gente. Confio nele de olhos fechados para nos representar!`,
    socialLink: {
      label: 'vicckdiniz',
      url: 'https://www.instagram.com/vicckdiniz',
    },
  },
  {
    name: 'Raquel Baptista',
    image: '/img/testimonials/raquel_baptista.jpg',
    review: `Feijão é a pessoa que mais confio na vida, e não é atoa que tenho plena confiança nesse projeto. Além de ser uma das pessoas mais comprometidas que conheço, ele sempre mostrou um verdadeiro senso de responsabilidade social. Como corredor e alguém que conhece a cidade de ponta a ponta, ele entende as necessidades de BH. Tô pronta e ansiosa pra colocar o 13031 nas urnas!`,
    socialLink: {
      label: 'quelrbaptista',
      url: 'https://www.instagram.com/quelrbaptista',
    },
  },
  {
    name: 'Rodrigo Dornellas',
    image: '/img/testimonials/rodrigo_dornellas.jpeg',
    review: `É com muita gratidão e confiança que venho aqui demonstrar meu apoio ao João Feijão, que sempre esteve ao nosso lado nos projetos sociais e esportivos. Tenho uma enorme admiração pelo seu envolvimento na defesa de uma sociedade mais justa, inclusiva e democrática. 
Hoje, estou confiante de que ele reúne todas as qualificações para ser um excelente vereador. Feijão terá meu voto para representar os valores sociais que acredito serem essenciais para uma Belo Horizonte cada vez melhor, investindo em acessibilidade, oportunidades e na valorização de todas as pessoas.`,
    designation: 'Fundador do Pernas de Aluguel BH',
  },
];

export default function Testimonial4() {
  return (
    <div className='wrapper bg-light' id='time-feijao'>
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
