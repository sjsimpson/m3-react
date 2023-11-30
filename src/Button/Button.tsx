import '../../scss/Button.scss'

import React from 'react'

import Icon, { IconStyles } from '../Icon'
import { ButtonVariants } from './Button.types'
import { clsx } from 'clsx'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  text: string
  variant?: ButtonVariants
  icon?: IconStyles
  iconOnly?: boolean
  type?: 'button' | 'submit' | 'reset' // Need to strongly type this for some reason
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = 'filled',
      text,
      icon,
      iconOnly = false,
      disabled = false,
      className,
      ...other
    } = props

    return (
      <button
        ref={ref}
        {...other}
        className={clsx(
          iconOnly ? 'icon-button' : `button button-${variant}`,
          icon && 'icon',
          disabled && 'disabled',
          className,
        )}
      >
        {icon ? <Icon icon={icon} /> : ''}
        {!iconOnly && <span>{text}</span>}
        <div className="state-layer" />
      </button>
    )
  },
)

export default Button
