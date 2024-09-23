import React, { useRef, useState } from 'react';
import styles from './WideButton.module.scss';
import anime from 'animejs';
import classNames from 'classnames';

type Props = {
  onClick?: () => void;
  buttonTitle: string;
  styleList?: {
    [key: string]: number | string | [];
  };
  animationSettings?: anime.AnimeParams;
  submitPayment?: boolean;
};

export const WideButton: React.FC<Props> = ({
  buttonTitle,
  styleList,
  onClick = () => {},
  animationSettings = {},
  submitPayment,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAnimatingError, setIsAnimatingError] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCartSubmitting = () => {
    setTimeout(() => {
      anime({
        targets: buttonRef.current,
        backgroundColor: '#fff',
        color: '#31FC56',
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
          setTimeout(() => {
            buttonRef.current!.textContent = '';
          }, 600);
        },
        complete: () => {
          buttonRef.current!.textContent = 'Success';
          setTimeout(() => {
            onClick();
            setIsAnimating(false);
          }, 1200);
        },
      });
    }, 400);
  };

  const handleError = () => {
    // just for test
    // setIsAnimatingError(false);
    // getAccessories()
    //   .then(() => {
    //     throw 123;
    //   })
    //   .catch(() => {
    //     setIsAnimatingError(true);
    //   })
    //   .finally(() => {
    //     setTimeout(() => {
    //       setIsAnimatingError(false);
    //     }, 13000);
    //   });
  };

  const handleClick = () => {
    if (isAnimatingError) {
      handleError();
    }

    if (isAnimating) {
      return;
    }

    if (animationSettings.targets !== undefined) {
      setIsAnimating(true);
      anime(animationSettings);
      setIsAnimating(false);
      onClick();
    }

    if (submitPayment) {
      setIsAnimating(true);
      handleCartSubmitting();
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
      {buttonTitle}
    </button>
  );
};
