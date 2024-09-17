import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const MainBannerSlider: React.FC<Props> = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="main__banner-slider">
      <div className="banner-slider__interactive-part">
        {screenWidth >= 640 && (
          <button className="banner-slider__button banner-slider__button--prev">
            {'<'}
          </button>
        )}

        <div className="banner-slider__banner"></div>

        {screenWidth >= 640 && (
          <button className="banner-slider__button banner-slider__button--next">
            {'>'}
          </button>
        )}
      </div>

      <div className="banner-slider__indicators">
        <div
          className={classNames('banner-slider__indicator', {
            'banner-slider__indicator--is-active': true,
          })}
        ></div>
        <div
          className={classNames('banner-slider__indicator', {
            'banner-slider__indicator--is-active': false,
          })}
        ></div>
        <div
          className={classNames('banner-slider__indicator', {
            'banner-slider__indicator--is-active': false,
          })}
        ></div>
      </div>
    </div>
  );
};
