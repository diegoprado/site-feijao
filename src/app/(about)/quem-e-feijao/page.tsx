import { Fragment } from 'react';
// GLOBAL CUSTOM COMPONENTS
import { Facts3 } from 'components/blocks/facts';
import { Banner3 } from 'components/blocks/banner';
import { Pricing1 } from 'components/blocks/pricing';
import { Contact7 } from 'components/blocks/contact';
import { Process6 } from 'components/blocks/process';
import { Services8 } from 'components/blocks/services';

export default function Services() {
  return (
    <Fragment>
      {/* ========== page title section ========== */}
      <section className='wrapper bg-soft-red pt-15'>
        <div className='container pt-10 pb-19 pt-md-14 pb-md-20 text-center'>
          <div className='row'>
            <div className='col-md-8 col-lg-7 col-xl-6 col-xxl-5 mx-auto mb-11'>
              <h1 className='display-1 mb-3'>Quem é João Feijão?</h1>
              <p className='lead px-lg-7 px-xl-7 px-xxl-6 display-4'>
                Por uma BH viva!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='wrapper bg-light angled upper-end'>
        <div className='container pb-14 pb-md-16'>
          {/* ========== facts section ========== */}
          <div className='row mb-8'>
            <div className='col-12 mt-n20'>
              <figure className='rounded'>
                <img
                  src='/img/photos/about5.jpg'
                  srcSet='/img/photos/about5@2x.jpg 2x'
                  alt=''
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className='wrapper bg-light angled upper-end mt-15'>
        <div className='container pb-14 pb-md-16'>
          {/* ========== facts section ========== */}
          <div className='row mb-8'>
            <div className='col-12 mt-n20'>
              <p>
                Sou o João Feijão. Corredor amador, amante do samba, engenheiro,
                atleticano de coração, morador da zona leste e presidente da
                Galo Runners.
              </p>
              <p>
                Desde cedo atuo na militância, começando no movimento
                estudantil. Na UFMG, se envolveu ainda mais, participando do
                Grêmio de Engenharia Elétrica, do Diretório Acadêmico da
                Engenharia, e presidindo a Federação Mineira de Empresas
                Juniores (FEJEMG).
              </p>
              <p>
                Como presidente da Galo Runners, lidera uma equipe de corredores
                que, desde 2015, não só promove a prática esportiva, mas também
                realiza ações sociais que impactam a vida das pessoas.
              </p>
              <p>
                Agora, Feijão é candidato a vereador, mas acredita em um projeto
                coletivo, com três bandeiras fundamentais: esporte, mobilidade e
                cuidado com a cidade e com as pessoas.
              </p>
              <p className='display-5'>
                JOÃO FEIJÃO É{' '}
                <span className='underline-3 style-1 red p-2'>13031.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='wrapper bg-light angled upper-end'>
        <div className='container py-14 py-md-16'>
          {/* ========== let's talks section ========== */}
          <Contact7 />
        </div>
      </section>
    </Fragment>
  );
}
