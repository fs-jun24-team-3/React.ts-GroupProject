import React from 'react';
import './Main.scss';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const Main: React.FC<Props> = () => {
  return (
    <main className="main">
      <div className="grid-container">
        <div className="main__content">
          <h1 className="main__title">Welcome to Nice Gadgets store!</h1>

          {/* TODO: Need to make it as a component like MainSlider*/}
          <div className="main__slider">
            <div className="slider__interactive-part">
              <button className="slider__button slider__button--prev"></button>

              <div className="slider__banner"></div>

              <button className="slider__button slider__button--next"></button>
            </div>

            <div className="slider__indicator"></div>
          </div>
          {/* TODO: Need to make it as a component like MainSlider*/}

          {/* TODO: Need to make it as a component like NewModelsList*/}
          <div className="main__new-models-slider">
            <div className="new-models-slider__header">
              <h2 className="new-models-slider__title">Brand new models</h2>

              <div className="new-models-slider__interactive-part">
                <button className="new-models-slider__button new-models-slider__button--prev"></button>

                <button className="new-models-slider__button new-models-slider__button--prev"></button>
              </div>
            </div>

            <ul className="new-models-slider__main">
              {/* TODO: map a piece of phone's list and render them with CardPhone component (component name may be another) */}
            </ul>
          </div>
          {/* TODO: Need to make it as a component like NewModelsList*/}

          {/* TODO: Need to make it as a component like CategoriesList*/}
          <div className="main-content__categories">
            <h2 className="categories__title">Shop by category</h2>

            <ul className="categories__body">
              {/* TODO: need to create CategoryItem component for this part and render it with map method*/}
            </ul>
          </div>
          {/* TODO: Need to make it as a component like CategoriesList*/}

          {/* TODO: Need to make it as a component HotPricesList*/}
          <div className="main__hot-prices-slider">
            <div className="hot-prices-slider__header">
              <h2 className="hot-prices-slider__title">Hot prices</h2>

              <div className="hot-prices-slider__interactive-part">
                <button className="hot-prices-slider__button hot-prices-slider__button--prev"></button>

                <button className="hot-prices-slider__button hot-prices-slider__button--prev"></button>
              </div>
            </div>

            <ul className="hot-prices-slider__main">
              {/* TODO: map a piece of phone's list and render them with CardPhone component (component name may be another) */}
            </ul>
          </div>
          {/* TODO: Need to make it as a component HotPricesList*/}
        </div>
      </div>
    </main>
  );
};
