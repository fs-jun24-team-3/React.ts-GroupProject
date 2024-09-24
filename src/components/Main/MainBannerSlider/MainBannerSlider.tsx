import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import './MainBannerSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/scss';
import swiperStyles from './MainBannerSwiper.module.scss';
import banner1 from '../../../img/mainIcons/Banner1.png';
import banner2 from '../../../img/mainIcons/Banner2.png';
import banner3 from '../../../img/mainIcons/Banner3.webp';
import phoneBanner1 from '../../../img/mainIcons/banerPhone.png';
import phoneBanner2 from '../../../img/mainIcons/banerPhone2.png';
import phoneBanner3 from '../../../img/mainIcons/banerPhone3.png';
import { Keyboard } from 'swiper/modules';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const MainBannerSlider: React.FC<Props> = () => {
  const [currScreenWidth, setCurrScreenWidth] = useState<number>(
    window.innerWidth,
  );
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperCore>();
  const wideBanners = [banner1, banner2, banner3];
  const phoneBanners = [phoneBanner1, phoneBanner2, phoneBanner3];

  const handleChangeSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const handleResize = () => {
    setCurrScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="main__banner-slider">
      <div className="banner-slider__interactive-part">
        <button
          className="banner-slider__button"
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.slidePrev();
            }
          }}
        >
          <div className="banner-slider__button--prev"></div>
        </button>

        <Swiper
          className={swiperStyles['swiper']}
          slidesPerView={1}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          modules={[Keyboard]}
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          onSlideChange={swiper => {
            handleChangeSlide(swiper.realIndex);
          }}
        >
          {currScreenWidth! >= 640 ? (
            <>
              {wideBanners.map(banner => (
                <SwiperSlide key={banner}>
                  <span className={swiperStyles['swiper__banner-container']}>
                    <img src={banner} alt="banner slide"></img>
                  </span>
                </SwiperSlide>
              ))}
            </>
          ) : (
            <>
              {phoneBanners.map(banner => (
                <SwiperSlide key={banner}>
                  <span className={swiperStyles['swiper__banner-container']}>
                    <img src={banner} alt="banner slide"></img>
                  </span>
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>

        <button
          className="banner-slider__button"
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.slideNext();
            }
          }}
        >
          <div className="banner-slider__button--next"></div>
        </button>
      </div>

      <div className="banner-slider__indicators">
        {[0, 1, 2].map(count => (
          <div
            className={classNames('banner-slider__indicator', {
              'banner-slider__indicator--is-active':
                count === currentSlideIndex,
            })}
            key={count}
          ></div>
        ))}
      </div>
    </div>
  );
};
