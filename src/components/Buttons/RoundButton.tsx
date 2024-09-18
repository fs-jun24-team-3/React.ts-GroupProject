import React, { useState } from 'react';
import './Buttons.scss';
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
        'round-button',
        { 'heart-button': buttonImgPath },
        { 'heart-button--is-active': isClicked },
      )}
      onClick={() => {
        handleClick();
        setIsClicked(!isClicked);
      }}
    >
      {buttonName || (
        <img
          src={isClicked ? heartImgOnClick : buttonImgPath}
          className="round-button__picture"
          alt="icon"
        />
      )}
    </button>
  );
};
