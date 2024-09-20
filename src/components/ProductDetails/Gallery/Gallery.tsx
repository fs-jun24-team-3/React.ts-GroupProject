import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BASE_URL, getGood } from '../../../api/api';
import { useParams } from 'react-router-dom';
import { EffectCube, Pagination, Keyboard } from 'swiper/modules';
import './Gallery.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-cube';
import SwiperCore from 'swiper';
import classNames from 'classnames';
import { getGoodsType } from '../../../utils/helpers/getGoodsType';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const Gallery: React.FC<Props> = () => {
  const [galleryImgsURLs, setGalleryImgsURLs] = useState<string[]>();
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const { goodsId } = useParams();
  const swiperRef = useRef<SwiperCore>();
  const goodsType = getGoodsType(goodsId as string);

  console.log(goodsId);

  const handleChangeSlide = (index: number) => {
    setCurrentSlideIndex(index);
    swiperRef.current?.slideTo(index);
  };

  useEffect(() => {
    getGood(goodsType as string, goodsId as string).then(goods => {
      setGalleryImgsURLs(goods!.images);
    });
  }, []);

  return (
    <div className="swiper-block">
      <Swiper
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
        {galleryImgsURLs &&
          galleryImgsURLs.map(galleryImgsURL => (
            <SwiperSlide key={galleryImgsURL}>
              <span className="swiper__container">
                <img src={BASE_URL + galleryImgsURL} alt="slide in cube" />
              </span>
            </SwiperSlide>
          ))}
      </Swiper>
      <ul className="swiper-block__slides">
        {galleryImgsURLs &&
          galleryImgsURLs.map((galleryImgsURL, index) => (
            <li
              key={index}
              className={classNames('swiper-block__slide', {
                'swiper-block__slide--is-active': index === currentSlideIndex,
              })}
              onClick={() => {
                handleChangeSlide(index);
              }}
            >
              <img src={BASE_URL + galleryImgsURL} alt="slide" />
            </li>
          ))}
      </ul>
    </div>
  );
};
