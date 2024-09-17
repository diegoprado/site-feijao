import { Tiles5 } from 'components/elements/tiles';
import IconBox from 'components/reuseable/IconBox';
import TeleMarketer from 'icons/lineal/TeleMarketer';
import Link from 'next/link';

export default function Contact7() {
  return (
    <section className='wrapper bg-light angled upper-end lower-end'>
      <div className='container pt-9 pb-7 pt-md-5 pb-md-4'>
        <div
          className={`row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center flex flex-row-reverse `}
        >
          <div className='col-lg-6 position-relative order-lg-2'>
            <Tiles5
              images={[
                '/img/photos/time-feijao.jpeg',
                '/img/photos/time-feijao-2.jpeg',
              ]}
            />
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
