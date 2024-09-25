import React from 'react';
import styles from './MainButton.module.scss';
import classNames from 'classnames';
import { ButtonSize } from '../../../utils/types/ButtonSize';

type Props = {
  onClick?: () => void;
  label: string;
  size: Exclude<ButtonSize, ButtonSize.Small>;
  isSelected: boolean;
};

export const MainButton: React.FC<Props> = ({
  label,
  onClick = () => {},
  size,
  isSelected,
}) => {
  return (
    <button
      className={classNames('button', styles['main-button'], {
        [styles['main-button__size--default']]: size === ButtonSize.Default,
        [styles['main-button__size--large']]: size === ButtonSize.Large,
        [styles['main-button--selected']]: isSelected,
      })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
