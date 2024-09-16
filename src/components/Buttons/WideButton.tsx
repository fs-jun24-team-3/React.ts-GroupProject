import React from 'react';
import './Buttons.scss';

type Props = {
  onClick?: () => void;
  buttonTitle: string;
  width?: number;
  height?: number;
};

export const WideButton: React.FC<Props> = ({
  buttonTitle,
  height,
  width,
  onClick = () => {},
}) => {
  return (
    <button
      className="wide-button"
      onClick={onClick}
      style={{ height: height, width: width }}
    >
      {buttonTitle}
    </button>
  );
};
