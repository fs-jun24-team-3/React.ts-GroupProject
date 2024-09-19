import React, { useState } from 'react';
import styles from './Buttons.module.scss';
import classNames from 'classnames';
import heartImgOnClick from '../../img/heartOnClick.png';

type Props = {
  onClick?: () => void;
} & (
  | { buttonName: string; buttonImgPath?: string }
  | { buttonImgPath: string; buttonName?: string }
);

export const RoundButton: React.FC<Props> = ({
  buttonName,
  buttonImgPath,
  onClick = () => {},
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick();
  };

  return (
    <button
      className={classNames(
        styles.round_button,
        { [styles.heart_button]: buttonImgPath },
        { [styles.heart_button__is_active]: isClicked },
      )}
      onClick={() => {
        handleClick();
        setIsClicked(!isClicked);
      }}
    >
      {buttonName || (
        <img
          src={isClicked ? heartImgOnClick : buttonImgPath}
          className={styles.round_button__picture}
          alt="icon"
        />
      )}
    </button>
  );
};
