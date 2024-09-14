import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const MainBannerSlider: React.FC<Props> = () => {
  return (
    <div className="main__banner-slider">
      <div className="banner-slider__interactive-part">
        <button className="banner-slider__button banner-slider__button--prev">
          {'<'}
        </button>

        <div className="banner-slider__banner"></div>

        <button className="banner-slider__button banner-slider__button--next">
          {'>'}
        </button>
      </div>

      <div className="banner-slider__indicator"></div>
    </div>
  );
};
