'use client';

import { Fragment, ReactElement, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

// ==================================================================
interface CarouselProps extends SwiperProps {
  pagination?: boolean;
  navigation?: boolean;
  spaceBetween?: number;
  slideClassName?: string;
  children: ReactElement | ReactElement[];
  slidesPerView?: number | 'auto';
}
// ==================================================================

export default function Carousel({
  children,
  slideClassName,
  spaceBetween = 30,
  slidesPerView = 3,
  pagination = true,
  navigation = true,
  ...others
}: CarouselProps) {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [paginationEl, setPaginationEl] = useState<HTMLElement | null>(null);

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <Fragment>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        modules={[Pagination, Navigation, Autoplay]}
        navigation={navigation ? { prevEl, nextEl } : false}
        pagination={pagination ? { clickable: true, el: paginationEl } : false}
        {...others}
      >
        {childrenArray.map((slide, i) => (
          <SwiperSlide className={slideClassName} key={i}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='swiper-controls'>
        {/* CUSTOM NAVIGATION */}
        {navigation ? (
          <div className='swiper-navigation'>
            <div
              role='button'
              ref={(node) => setPrevEl(node)}
              className='swiper-button swiper-button-prev'
            />
            <div
              role='button'
              ref={(node) => setNextEl(node)}
              className='swiper-button swiper-button-next'
            />
          </div>
        ) : null}

        {/* CUSTOM PAGINATION */}
        {pagination ? (
          <div
            className='swiper-pagination'
            ref={(node) => setPaginationEl(node)}
          />
        ) : null}
      </div>
    </Fragment>
  );
}
