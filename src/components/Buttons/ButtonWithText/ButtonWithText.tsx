import classNames from 'classnames';
import { Button } from '../Button';
import styles from './ButtonWithText.module.scss';
import React from 'react';
import { ButtonSize } from '../../../utils/types/ButtonSize';
import { ButtonShape } from '../../../utils/types/ButtonShape';

type Props = {
  isSelected: boolean;
  shape: ButtonShape;
  label: string;
  onClick?: () => void;
  size: ButtonSize;
};

export const ButtonWithText: React.FC<Props> = ({
  shape,
  label,
  isSelected,
  size,
  onClick,
}) => {
  return (
    <Button
      shape={shape}
      size={size}
      onClick={onClick}
      className={classNames(styles['button-with-text'], {
        [styles['button-with-text--selected']]: isSelected,
      })}
    >
      {label}
    </Button>
  );
};
