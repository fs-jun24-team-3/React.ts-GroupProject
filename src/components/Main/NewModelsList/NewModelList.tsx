import React from 'react';
import { NewModelItem } from './NewModelItem';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const NewModelList: React.FC<Props> = () => {
  return (
    <div className="main__new-models-slider">
      <div className="new-models-slider__header">
        <h2 className="new-models-slider__title">Brand new models</h2>

        <div className="new-models-slider__interactive-part">
          <button className="new-models-slider__button new-models-slider__button--prev"></button>

          <button className="new-models-slider__button new-models-slider__button--prev"></button>
        </div>
      </div>

      <ul className="new-models-slider__list">
        <NewModelItem />
      </ul>
    </div>
  );
};
