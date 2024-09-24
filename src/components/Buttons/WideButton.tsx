import React, { useRef, useState } from 'react';
import styles from './WideButton.module.scss';
import anime from 'animejs';
import classNames from 'classnames';

type Props = {
  onClick?: () => void;
  onClickForCancel?: () => void;
  buttonTitle: string;
  styleList?: {
    [key: string]: number | string | [];
  };
  animationSettings?: anime.AnimeParams;
  useSucceessAnimation?: boolean;
  useAnimationForPhoneCard?: boolean;
  isError?: boolean;
  animationTimeMS?: number;
};

export const WideButton: React.FC<Props> = ({
  buttonTitle,
  styleList,
  onClick = () => {},
  onClickForCancel = () => {},
  animationSettings = {},
  useSucceessAnimation = false,
  useAnimationForPhoneCard = false,
  isError = false,
  animationTimeMS = 0,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [animationTimeSum] = useState(
    useSucceessAnimation ? 2000 + animationTimeMS : animationTimeMS,
  );
  const [isAnimatingError, setIsAnimatingError] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [clicksCount, setClicksCount] = useState(1);

  const handleDefaultButtonClickAction = () => {
    anime({
      targets: buttonRef.current,
      backgroundColor: '#fff',
      color: '#31FC56',
      fontSize: 14,
      fontWeight: 600,
      duration: 1000,
      keyframes: [
        { rotateX: -180, translateY: -28 },
        { rotateX: -360, translateY: 0 },
      ],
      textShadow: ['rgba(0,255, 0, 0.7) 0px 0px 29px'],
      boxShadow: [
        'rgba(0,0,0,0.9) 0px 0px 0px;',
        { value: 'rgba(0,255, 0, 0.1) 0px 0px 19px', duration: 700 },
        { value: 'rgba(0,255, 0, 0.9) 0px 0px 29px', duration: 300 },
        'rgba(0,255, 0, 0.2) 0px 0px 29px',
      ],
      easing: 'easeInOutQuad',
      begin: () => {
        buttonRef.current!.textContent = '';
      },
      complete: () => {
        buttonRef.current!.textContent = 'Success';
      },
    });
  };

  const handleAnimationForPhoneCard = () => {
    setClicksCount(prev => prev + 1);
    switch (clicksCount) {
      case 1: {
        handleDefaultButtonClickAction();
        setTimeout(() => {
          anime({
            targets: buttonRef.current,
            backgroundColor: '#fff',
            color: '#fc0202',
            fontSize: 14,
            fontWeight: 700,
            duration: 500,
            keyframes: [{ opacity: 0 }, { opacity: 1 }],
            textShadow: ['rgba(255,0, 0, 0.7) 0px 0px 29px'],
            boxShadow: [
              'rgba(0,0,0,0.9) 0px 0px 0px;',
              { value: 'rgba(255,0, 0, 0.1) 0px 0px 19px', duration: 300 },
              { value: 'rgba(255,0, 0, 0.9) 0px 0px 29px', duration: 200 },
              'rgba(255,0, 0, 0.2) 0px 0px 29px',
            ],
            easing: 'easeInOutQuad',
            begin: () => {
              onClick();
              buttonRef.current!.textContent = '';
            },
            complete: () => {
              setIsAnimating(false);
              console.log('permit');
              buttonRef.current!.textContent = 'Cancel';
            },
          });
        }, animationTimeSum);

        return;
      }
      case 2: {
        anime({
          targets: buttonRef.current,
          backgroundColor: '#4219d0',
          color: '#fff',
          duration: 600,
          fontSize: 14,
          fontWeight: 700,
          keyframes: [
            { transformScale: 3, filterBlur: 6 },
            { transformScale: 1, filterBlur: 0 },
          ],
          textShadow: ['rgba(0,0, 0, 0) 0px 0px 0px'],
          boxShadow: [
            'rgba(0,0,0,0.9) 0px 0px 0px;',
            { value: 'rgba(0, 0, 255, 0.1) 0px 0px 19px', duration: 300 },
            { value: 'rgba(0, 0, 255, 0.9) 0px 0px 29px', duration: 200 },
            { value: 'rgba(0, 0, 255, 0.1) 0px 0px 29px', duration: 100 },
            'rgba(0,0, 0, 0) 0px 0px 0px',
          ],
          easing: 'easeInOutQuad',
          begin: () => {
            onClickForCancel();
            buttonRef.current!.textContent = '';
          },
          complete: () => {
            setIsAnimating(false);
            buttonRef.current!.textContent = 'Add to cart';
          },
        });

        return;
      }
    }
  };

  const handleError = () => {
    setIsAnimatingError(true);
  };

  const handleClick = () => {
    if (isError) {
      handleError();
      setTimeout(() => {
        setIsAnimatingError(false);
      }, 1000);

      return;
    }

    if (isAnimating) {
      return;
    }

    if (useAnimationForPhoneCard && !isAnimating) {
      setIsAnimating(true);
      handleAnimationForPhoneCard();

      if (clicksCount >= 2) {
        setClicksCount(1);
      }

      return;
    }

    if (useSucceessAnimation) {
      setIsAnimating(true);
      handleDefaultButtonClickAction();
      setIsAnimating(false);

      if (!isAnimating) {
        setIsAnimating(true);
        anime(animationSettings);
        setTimeout(() => {
          setIsAnimating(false);
          onClick();
        }, animationTimeSum);
      }

      return;
    } else {
      if (!isAnimating) {
        setIsAnimating(true);
        anime(animationSettings);
        setTimeout(() => {
          setIsAnimating(false);
          onClick();
        }, animationTimeSum);
      }

      return;
    }
  };

  return (
    <button
      ref={buttonRef}
      className={classNames(styles.wide_button, {
        [styles.swing_bottom_fwd]: isAnimatingError,
      })}
      onClick={handleClick}
      style={{ ...styleList }}
    >
      <p className={styles['wide_button__title']}>{buttonTitle}</p>
    </button>
  );
};
