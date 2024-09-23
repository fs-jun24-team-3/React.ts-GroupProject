import React, { useRef } from 'react';
import { PhoneCard } from '../PhoneCard';
import './GoodSlider.scss';
import swiperStyles from './GoodSliderSwiper.module.scss';
import { UnionProduct } from '../../../utils/types/UnionProduct';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/scss';
import { Keyboard } from 'swiper/modules';

type Props = {
  sliderTitle: string;
  productsList: UnionProduct[];
};

export const GoodsSlider: React.FC<Props> = ({ sliderTitle, productsList }) => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <div className="main__slider">
      <div className="slider__header">
        <h2 className="slider__title">{sliderTitle}</h2>

        <div className="slider__interactive-part">
          <button
            className="slider__button"
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slidePrev();
              }
            }}
          >
            <div className="slider__button--prev"></div>
          </button>

          <button
            className="slider__button"
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideNext();
              }
            }}
          >
            <div className="slider__button--next"></div>
          </button>
        </div>
      </div>
      <ul className="slider__list">
        {/* TODO: at this stage we need to load phone cards from server, map given list and render it */}
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={false}
          spaceBetween={16}
          keyboard={{
            enabled: true,
          }}
          modules={[Keyboard]}
          onSwiper={swiper => (swiperRef.current = swiper)}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {productsList.map(product => (
            <SwiperSlide
              key={product.id + '-slide'}
              className={swiperStyles['swiper-slide']}
            >
              <span className={swiperStyles['swiper-product__slide']}>
                <PhoneCard item={product} />
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </div>
  );
};
