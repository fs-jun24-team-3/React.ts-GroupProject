import React from 'react';
import './Buttons.scss';

type Props = {
  onClick?: () => void;
  buttonTitle: string;
};

export const WideButton: React.FC<Props> = ({
  buttonTitle,
  onClick = () => {},
}) => {
  return (
    <button className="wide-button" onClick={onClick}>
      {buttonTitle}
    </button>
  );
};
