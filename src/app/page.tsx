import { Fragment } from 'react';
// GLOBAL CUSTOM COMPONENTS
import Navbar from 'components/blocks/navbar/navbar-1';
import { Process7 } from 'components/blocks/process';
import { Team3 } from 'components/blocks/team';
import { About6, Sobre } from 'components/blocks/about';
import { Facts5 } from 'components/blocks/facts';
import { Footer9 } from 'components/blocks/footer';
import { Contact7 } from 'components/blocks/contact';
import { CTA5 } from 'components/blocks/call-to-action';
import {
  Testimonial1,
  Testimonial2,
  Testimonial3,
  Testimonial4,
  Testimonial5,
  Testimonial6,
  Testimonial7,
  Testimonial8,
  Testimonial9,
} from 'components/blocks/testimonial';
import Hero15 from 'components/blocks/hero/Hero15';
import Link from 'next/link';

export default function Demo15() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className='wrapper bg-soft-primary'>
        <Navbar
          logoAlt='logo-feijao'
          stickyBox={false}
          navClassName='navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none'
        />
      </header>

      {/* ========== main content ========== */}
      <main className='content-wrapper'>
        {/* ========== hero sections ========== */}
        <Hero15 />

        <section className='wrapper bg-light angled lower-end'>
          <div className='container py-14 py-md-16'>
            {/* ========== about section ========== */}
            <Sobre
              title='Quem sou'
              id='quem-sou'
              text={[
                'Eu sou o João Feijão, corredor amador, amante do samba, engenheiro, atleticano de coração, morador da zona leste e presidente da Galo Runners. Estou no corre por uma BH melhor!',
                'Nasci em Curvelo e, assim como muitos belo-horizontinos, mudei para a capital em busca de um futuro melhor. Minha militância começou cedo, no movimento estudantil. Na UFMG me engajei ainda mais: participei do Grêmio de Engenharia Elétrica, do Diretório Acadêmico da Engenharia e tive o privilégio de presidir a Federação Mineira de Empresas Juniores, a FEJEMG.',
              ]}
            />

            <Sobre
              inverted
              title='O que penso'
              id='o-que-penso'
              text={[
                'Quero retribuir tudo que BH me deu ajudando a construir uma cidade que não deixe ninguém pra trás. Somos a 3ª capital de estado mais rica do Brasil, mas essa grana não chega no dia a dia da maior parte desse povo. Precisamos construir uma cidade viva.',
                'Hoje, como presidente da Galo Runners, tenho orgulho de liderar uma equipe de corredores que, desde 2015, não só promove a prática esportiva, mas também realiza ações sociais que impactam a vida das pessoas. Utilizamos nosso amor pelo Galo e pela corrida sem deixar de lado a solidariedade e a transformação social.',
              ]}
            />

            <Sobre
              title='O que quero'
              id='o-que-quero'
              text={[
                'Nosso projeto acredita na necessidade urgente de uma Cidade Viva, com três bandeiras fundamentais: esporte, mobilidade e cuidado com a cidade e com as pessoas. Queremos uma cidade pensada especialmente para o pedestre e para as mulheres, porque quando criamos um ambiente seguro e acolhedor para elas, criamos um lugar melhor para todos.',
              ]}
            />
          </div>

          <div className='bg-red w-full'>
            <h2 className='text-white flex items-center justify-center text-6xl p-5'>
              JOÃO FEIJÃO É 13031.
            </h2>
          </div>

          <div className='container py-14 py-md-16'>
            <div className='flex flex-col md:flex-row gap-4'>
              <div className='flex max-w-[100px]'>
                <h2 className='heading-2 text-4xl md:text-6xl [writing-mode:initial] md:[writing-mode:vertical-lr] rotate-0 md:rotate-180 font-bold text-red-200'>
                  Esporte
                </h2>
              </div>

              <div>
                <p>
                  <strong>EU SOU CORREDOR</strong> e acredito no esporte como
                  ferramenta de inclusão social, lazer, desenvolvimento
                  econômico e promoção à saúde. Eu vivo na pele as dificuldades
                  dos corredores. Precisamos treinar com a segurança e o
                  conforto que merecemos.
                </p>
                <h6>VOU LUTAR PELA:</h6>
                <ul className='list-disc'>
                  <li>
                    Presença contínua da Guarda Municipal nos principais pontos
                    de treinamento.
                  </li>
                  <li>
                    Faixa exclusiva, aos sábados, domingos e feriados, na orla
                    da Lagoa da Pampulha para a prática de atividades
                    esportivas.
                  </li>
                  <li>
                    Instalação e manutenção de banheiros públicos em locais
                    importantes.
                  </li>
                </ul>
              </div>
            </div>

            <hr className='my-10 md:my-15' />

            <div className='flex flex-col md:flex-row gap-4'>
              <div className='flex max-w-[100px]'>
                <h2 className='heading-2 text-4xl md:text-6xl [writing-mode:initial] md:[writing-mode:vertical-lr] rotate-0 md:rotate-180 font-bold text-red-200'>
                  Mobilidade
                </h2>
              </div>

              <div>
                <p>
                  <strong>EU SOU USUÁRIO DE TRANSPORTE PÚBLICO</strong> e sei
                  que a mobilidade deve ser tratada como prioridade pela
                  Prefeitura de BH. Uma cidade viva precisa de um transporte
                  público de qualidade e segurança para que as pessoas possam
                  utilizar meios de transporte alternativos. Hoje perdemos quase
                  1 HORA para percorrer 10KM.
                </p>
                <h6>VOU LUTAR PELA:</h6>
                <ul className='list-disc'>
                  <li>
                    Revisão dos contratos das empresas de ônibus e participação
                    ativa da classe trabalhadora no novo contrato que será
                    firmado em 2028.
                  </li>
                  <li>
                    Valorização dos motoristas que hoje estão sobrecarregados
                    com mais funções do que aquelas pelas quais foram
                    contratados.
                  </li>
                  <li>
                    <Link
                      href='https://lookerstudio.google.com/u/0/reporting/3c67c9cd-2450-4963-aab1-0251b4fdc75f/page/VWUpD'
                      className='text-gray-600'
                    >
                      Aprovação do Projeto de Lei da Tarifa zero, já protocolado
                      na Câmara. Hoje, 5.6 milhões de brasileiros de 116 cidades
                      não pagam um centavo pelo transporte público.
                    </Link>
                  </li>
                  <li>
                    Garantir da zeladoria das ruas e calçadas da cidade,
                    obrigação da Prefeitura.
                  </li>
                  <li>Ampliação das ciclovias em todas as regionais de BH.</li>
                </ul>
              </div>
            </div>

            <hr />

            <div className='flex flex-col md:flex-row gap-4'>
              <div className='flex max-w-[100px]'>
                <h2 className='heading-2 text-4xl md:text-6xl [writing-mode:initial] md:[writing-mode:vertical-lr] rotate-0 md:rotate-180 font-bold text-red-200'>
                  Cuidado
                </h2>
              </div>

              <div className=''>
                <p>
                  <strong>EU VIVO A CIDADE</strong> e sei que Belo Horizonte
                  está abandonada, suja e mal cuidada. Aliás, quem não sabe? É
                  necessário que os serviços básicos funcionem bem.
                </p>
                <h6>VOU LUTAR PELA:</h6>
                <ul className='list-disc'>
                  <li>
                    <Link
                      href='https://www.otempo.com.br/cidades/2024/5/24/apenas-1-1--dos-residuos-coletados-em-bh-sao-reciclados'
                      className='text-gray-600'
                    >
                      Coleta seletiva eficiente, abrangente e universal,
                      atendendo todos os bairros da cidade. Apenas 1,1% dos
                      resíduos coletados em BH são reciclados.
                    </Link>
                  </li>
                  <li>
                    Cuidado com a população em situação de rua, desde o
                    acolhimento até a capacitação, respeitando os direitos
                    humanos e as individualidades de cada pessoa
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========== testimonial section ========== */}

        <Testimonial4 />

        {/* ========== contact section ========== */}
        <Contact7 />

        {/* ========== call to action section ========== */}
        {/* <CTA5 /> */}
      </main>

      {/* ========== footer section ========== */}
      <Footer9 />
    </Fragment>
  );
}
