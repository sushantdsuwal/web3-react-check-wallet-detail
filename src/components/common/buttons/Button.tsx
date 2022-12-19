import { forwardRef } from 'react';
import { Button as ButtonBase, ButtonProps } from 'react-bootstrap';

import classNames from 'classnames';

interface IButtonProps extends ButtonProps {
  className?: string;
  icon?: string;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  return (
    <ButtonBase ref={ref} {...props} className={classNames('btn', 'd-flex', 'align-items-center', props.className)}>
      {props.icon && <i className={`${props.icon}`} />}
      {props.children}
    </ButtonBase>
  );
});

Button.displayName = 'Button';
export default Button;
