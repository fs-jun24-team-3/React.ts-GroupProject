import classNames from 'classnames';
import { Button } from '../Button';
import styles from './ButtonWithColor.module.scss';
import colorsMap from '../../../utils/constants/colorsMap.json';
import { ProductColor } from '../../../utils/types/ProductColor';
import React from 'react';
import { ButtonSize } from '../../../utils/types/ButtonSize';

type Props = {
  isSelected: boolean;
  color: ProductColor;
  onClick?: () => void;
  size: ButtonSize;
};

export const ButtonWithColor: React.FC<Props> = ({
  isSelected,
  color,
  onClick,
  size,
}) => {
  return (
    <Button
      onClick={onClick}
      className={classNames(styles['button-with-color'], {
        [styles['button-with-color__element--selected']]: isSelected,
      })}
      size={size}
    >
      <div
        className={styles['button-with-color__element']}
        style={{ backgroundColor: colorsMap[color] }}
      ></div>
    </Button>
  );
};
