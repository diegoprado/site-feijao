'use client';

import Carousel from 'components/reuseable/Carousel';
// GLOBAL CUSTOM HOOKS
import useLightBox from 'hooks/useLightBox';
// GLOBAL CUSTOM COMPONENTS
import NextLink from 'components/reuseable/links/NextLink';

export default function Hero15() {
  // use video popup
  useLightBox();

  return (
    <div className='wrapper bg-dark'>
      <div className='swiper-container swiper-hero dots-over'>
        <Carousel
          slidesPerView={1}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
        >
          <div
            className='swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image'
            style={{
              backgroundImage: 'url("/img/hero-banner.svg")',
              backgroundPosition: '100% 0%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className='container h-100'>
              <div className='row h-100'>
                <div className='col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start'>
                  <h2 className='display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s'>
                    Vereador <br />
                    JOÃO FEIJÃO <br />
                    <span className='underline-3 style-2 red'>13031</span>
                  </h2>

                  <p className='lead fs-28 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s'>
                    Por uma Belo Horizonte viva!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
