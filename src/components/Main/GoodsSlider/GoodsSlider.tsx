import React from 'react';
import { PhoneCard } from '../PhoneCard';
import { RoundButton } from '../../Buttons/RoundButton';

type Props = {
  sliderTitle: string;
};

export const GoodsSlider: React.FC<Props> = ({ sliderTitle }) => {
  return (
    <div className="main__slider">
      <div className="slider__header">
        <h2 className="slider__title">{sliderTitle}</h2>

        <div className="slider__interactive-part">
          <RoundButton buttonName="<" />
          <RoundButton buttonName=">" />
        </div>
      </div>
      <ul className="slider__list">
        {/* TODO: at this stage we need to load phone cards from server, map given list and render it */}
        <PhoneCard />
        <PhoneCard />
        <PhoneCard />
        <PhoneCard />
      </ul>
    </div>
  );
};
