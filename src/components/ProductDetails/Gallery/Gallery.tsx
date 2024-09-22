import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BASE_URL } from '../../../api/api';
import { EffectCube, Pagination, Keyboard } from 'swiper/modules';
import swiperStyles from './Gallery.module.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-cube';
import SwiperCore from 'swiper';
import classNames from 'classnames';

type Props = { images: string[] };

export const Gallery: React.FC<Props> = ({ images }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperCore>();

  const handleChangeSlide = (index: number) => {
    setCurrentSlideIndex(index);
    swiperRef.current?.slideTo(index);
  };

  console.log(swiperStyles);

  return (
    <div className={swiperStyles['swiper-block']}>
      <Swiper
        className={swiperStyles['swiper']}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard, Pagination, EffectCube]}
        effect={'cube'}
        cubeEffect={{
          shadow: true,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        onSlideChange={swiper => {
          setCurrentSlideIndex(swiper.activeIndex);
        }}
      >
        {images.map(image => (
          <SwiperSlide className={swiperStyles['swiper-slide']} key={image}>
            <span className={swiperStyles['swiper__container']}>
              <img src={BASE_URL + image} alt="slide in cube" />
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
      <ul className={swiperStyles['swiper-block__slides']}>
        {images.map((image, index) => (
          <li
            key={index}
            className={classNames(swiperStyles['swiper-block__slide'], {
              [swiperStyles['swiper-block__slide--is-active']]:
                index === currentSlideIndex,
            })}
            onClick={() => {
              handleChangeSlide(index);
            }}
          >
            <img src={BASE_URL + image} alt="slide" />
          </li>
        ))}
      </ul>
    </div>
  );
};
