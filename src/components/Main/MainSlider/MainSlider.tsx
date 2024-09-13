import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const MainSlider: React.FC<Props> = () => {
  return (
    <div className="main__slider">
      <div className="slider__interactive-part">
        <button className="slider__button slider__button--prev"></button>

        <div className="slider__banner"></div>

        <button className="slider__button slider__button--next"></button>
      </div>

      <div className="slider__indicator"></div>
    </div>
  );
};
