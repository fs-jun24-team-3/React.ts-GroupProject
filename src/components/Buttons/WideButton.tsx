import React from 'react';
import styles from './Buttons.module.scss';

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
      className={styles.wide_button}
      onClick={onClick}
      style={{ height: height, width: width }}
    >
      {buttonTitle}
    </button>
  );
};
