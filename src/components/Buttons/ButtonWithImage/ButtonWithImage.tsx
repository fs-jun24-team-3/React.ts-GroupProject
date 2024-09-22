import classNames from 'classnames';
import { Button } from '../Button';
import styles from './ButtonWithImage.module.scss';
import React from 'react';
import { ButtonSize } from '../../../utils/types/ButtonSize';

type Props = {
  isSelected: boolean;
  path: string;
  onClick?: () => void;
  size: ButtonSize;
};

export const ButtonWithImage: React.FC<Props> = ({
  path,
  size,
  onClick,
  isSelected,
}) => {
  return (
    <Button
      onClick={onClick}
      className={classNames(styles['button-with-image'], {
        [styles['button-with-image--selected']]: isSelected,
      })}
      size={size}
    >
      <img src={path} alt="" className={styles['button-with-image__image']} />
    </Button>
  );
};
