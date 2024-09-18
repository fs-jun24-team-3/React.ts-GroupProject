import React from 'react';
import classNames from 'classnames';
import '../MainBannerSlider/MainBannerSlider.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const MainBannerSlider: React.FC<Props> = () => {
  return (
    <div className="main__banner-slider">
      <div className="banner-slider__interactive-part">
        <button className="banner-slider__button ">
          <div className="banner-slider__button--prev"></div>
        </button>

        <div className="banner-slider__banner"></div>

        <button className="banner-slider__button">
          <div className="banner-slider__button--next"></div>
        </button>
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
