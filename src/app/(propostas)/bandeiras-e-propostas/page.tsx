import { Fragment } from 'react';
// GLOBAL CUSTOM COMPONENTS
import { Facts3 } from 'components/blocks/facts';
import { Banner3 } from 'components/blocks/banner';
import { Pricing1 } from 'components/blocks/pricing';
import { Contact3, Contact7 } from 'components/blocks/contact';
import { Process6 } from 'components/blocks/process';
import {
  Services1,
  Services10,
  Services11,
  Services12,
  Services13,
  Services14,
  Services15,
  Services2,
  Services3,
  Services4,
  Services5,
  Services6,
  Services7,
  Services8,
  Services9,
} from 'components/blocks/services';

export default function Services() {
  return (
    <Fragment>
      {/* ========== page title section ========== */}
      <section className='wrapper bg-soft-red'>
        <div className='container pt-10 pb-19 pt-md-14 pb-md-20 text-center'>
          <div className='row'>
            <div className='col-md-8 col-lg-7 col-xl-6 col-xxl-5 mx-auto mb-11'>
              <h1 className='display-1 mb-3'>Bandeiras e Propostas</h1>
              <p className='lead px-lg-7 px-xl-7 px-xxl-6'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus est reiciendis dolorem rerum. Doloremque, voluptatem.
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

          {/* ========== what we do section ========== */}
          <Services8
            title='Esporte'
            description={
              <>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus quasi placeat vel aspernatur.
              </>
            }
          />

          <Services8
            title='Mobilidade'
            description={
              <>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus quasi placeat vel aspernatur.
              </>
            }
            inverse
          />

          {/* ========== how we do section ========== */}
          <Process6 />
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
