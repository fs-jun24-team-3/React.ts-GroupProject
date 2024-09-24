import React, { ReactNode } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';
import { ButtonSize } from '../../../utils/types/ButtonSize';
import { ButtonShape } from '../../../utils/types/ButtonShape';

type Props = {
  children: ReactNode;
  className: string;
  onClick?: () => void;
  size?: ButtonSize;
  shape?: ButtonShape;
};

export const Button: React.FC<Props> = ({
  children,
  className,
  size = ButtonSize.Default,
  shape = ButtonShape.Circle,
  onClick = () => {},
}) => {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles['button__size--small']]: size === ButtonSize.Small,
        [styles['button__size--default']]: size === ButtonSize.Default,
        [styles['button__size--large']]: size === ButtonSize.Large,
        [styles['button__shape--circle']]: shape === ButtonShape.Circle,
        [styles['button__shape--rectangle']]: shape === ButtonShape.Rectangle,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
