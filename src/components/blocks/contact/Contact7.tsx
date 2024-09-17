import IconBox from 'components/reuseable/IconBox';
import TeleMarketer from 'icons/lineal/TeleMarketer';
import Link from 'next/link';

export default function Contact7() {
  return (
    <section className='wrapper bg-light angled upper-end lower-end'>
      <div className='container pt-9 pb-7 pt-md-5 pb-md-4'>
        <div className='row gx-md-8 gx-xl-12 gy-10 align-items-center'>
          <div className='col-md-8 col-lg-6 offset-lg-0 col-xl-5 offset-xl-1 position-relative'>
            <div
              className='shape bg-dot primary rellax w-17 h-21'
              style={{ top: '-2rem', left: '-1.4rem' }}
            />

            <figure className='rounded'>
              <img
                src='/img/photos/time-feijao.jpeg'
                // srcSet='/img/photos/about4@2x.jpg 2x'
                alt=''
              />
            </figure>
          </div>

          <div className='col-lg-6'>
            <h2 className='display-4 mb-8'>Vem pro time do Feijão!</h2>
            <div className='d-flex flex-row'>
              <div>
                <IconBox
                  className='icon text-primary fs-28 me-6 mt-n1'
                  icon='uil-instagram'
                />
              </div>

              <div>
                <p className='mb-1'>
                  Me siga no instagram e fique por dentro de tudo:
                </p>
                <p>
                  <Link
                    href='https://www.instagram.com/ofeijao13/'
                    target='_blank'
                  >
                    @ofeijao13
                  </Link>
                </p>
              </div>
            </div>

            <div className='d-flex flex-row'>
              <div>
                <IconBox
                  className='icon text-primary fs-28 me-6 mt-n1'
                  icon='uil-whatsapp'
                />
              </div>

              <div>
                <p className='mb-1'>
                  Quer acompanhar mais de pertinho as propostas, agendas,
                  receber materiais digitais e se engajar com nossa campanha?
                </p>
                <p>
                  <Link href='http://joaofeijao.com.br/time' target='_blank'>
                    Entre no nosso grupo sem falazada
                  </Link>
                </p>
              </div>
            </div>

            <div className='d-flex flex-row'>
              <div>
                <IconBox
                  className='icon text-primary fs-28 me-6 mt-n1'
                  icon='uil-whatsapp'
                />
              </div>

              <div>
                <p className='mb-1'>
                  Quer conversar, discutir ideias, falar comigo e conversar com
                  o Time do Feijão?
                </p>
                <p>
                  <Link
                    href='http://joaofeijao.com.br/mobilizacao'
                    target='_blank'
                  >
                    Entre no nosso grupo aberto
                  </Link>
                </p>
              </div>
            </div>

            <div className='d-flex flex-row'>
              <div>
                <IconBox
                  className='icon text-primary fs-28 me-6 mt-n1'
                  icon='uil-file-info-alt'
                />
              </div>

              <div>
                <p className='mb-1'>
                  Quer receber meus materiais físicos na sua casa e ajudar a
                  espalhar nosso projeto?
                </p>
                <p>
                  <Link href='https://joaofeijao.com.br/apoio/' target='_blank'>
                    Preencha esse formulário
                  </Link>
                </p>
              </div>
            </div>

            <div className='d-flex flex-row'>
              <div>
                <IconBox
                  className='icon text-primary fs-28 me-6 mt-n1'
                  icon='uil-google-drive'
                />
              </div>

              <div>
                <p className='mb-1'>
                  Quer materiais digitais para colocar nas suas redes, mandar
                  pra família e amigos?
                </p>
                <p>
                  <Link
                    href='http://joaofeijao.com.br/material'
                    target='_blank'
                  >
                    Acesse todos eles
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
