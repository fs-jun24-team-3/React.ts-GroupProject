import React, { useEffect, useRef, useState } from 'react';
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
  const isAnimatingRef = useRef(false);
  const [isAnimatingError, setIsAnimatingError] = useState(false);
  const animationInstance = useRef<anime.AnimeInstance | null>(null);
  const [clicksCount, setClicksCount] = useState(1);
  const [key, setKey] = useState<string | null>(null);

  console.log(animationInstance.current);

  const handleDefaultButtonClickAction = () => {
    animationInstance.current = anime({
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
        if (buttonRef.current) {
          buttonRef.current.textContent = '';
        }
      },
      complete: () => {
        if (buttonRef.current) {
          buttonRef.current!.textContent = 'Success';
        }
      },
    });
  };

  const handleAnimationForPhoneCard = () => {
    setClicksCount(prev => prev + 1);
    switch (clicksCount) {
      case 1: {
        handleDefaultButtonClickAction();
        setTimeout(() => {
          animationInstance.current = anime({
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
              if (buttonRef.current) {
                buttonRef.current.textContent = '';
              }
            },
            complete: () => {
              isAnimatingRef.current = false;
              if (buttonRef.current) {
                buttonRef.current!.textContent = 'Cancel';
              }
            },
          });
        }, animationTimeSum);

        return;
      }
      case 2: {
        animationInstance.current = anime({
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
            if (buttonRef.current) {
              buttonRef.current.textContent = '';
            }
          },
          complete: () => {
            isAnimatingRef.current = false;
            if (buttonRef.current) {
              buttonRef.current!.textContent = 'Add to cart';
            }
          },
        });

        return;
      }
    }
  };

  const handleError = () => {
    setIsAnimatingError(true);
    setTimeout(() => {
      setIsAnimatingError(false);
    }, 800);
  };

  const handleClick = () => {
    if (isError) {
      if (!isAnimatingError) {
        handleError();
      }

      return;
    }

    if (isAnimatingRef.current) {
      return;
    }

    if (useAnimationForPhoneCard && !isAnimatingRef.current) {
      isAnimatingRef.current = true;
      handleAnimationForPhoneCard();

      if (clicksCount >= 2) {
        setClicksCount(1);
      }

      return;
    }

    if (useSucceessAnimation) {
      isAnimatingRef.current = true;
      handleDefaultButtonClickAction();

      if (isAnimatingRef.current === true) {
        isAnimatingRef.current = true;
        anime(animationSettings);
        setTimeout(() => {
          isAnimatingRef.current = false;
          onClick();
        }, animationTimeSum);
      }

      return;
    } else {
      if (isAnimatingRef.current) {
        isAnimatingRef.current = true;
        anime(animationSettings);
        setTimeout(() => {
          isAnimatingRef.current = false;
          onClick();
        }, animationTimeSum);
      }

      return;
    }
  };

  useEffect(() => {
    setKey(String(Math.random));

    return () => {
      if (animationInstance.current) {
        animationInstance.current.pause();
      }
      setIsAnimatingError(false);
      isAnimatingRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (animationInstance.current) {
      animationInstance.current.play();
    }
  }, []);

  return (
    <button
      key={key}
      ref={buttonRef}
      className={classNames(styles.wide_button, {
        [styles.shake_horizontal]: isAnimatingError,
      })}
      onClick={handleClick}
      style={{ ...styleList }}
    >
      <p className={styles['wide_button__title']}>{buttonTitle}</p>
    </button>
  );
};
