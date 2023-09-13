import '../../scss/Button.scss'

import React from 'react'

import Icon, { IconStyles } from '../Icon'
import { ButtonVariants } from './Button.types'

interface ButtonProps {
  variant?: ButtonVariants
  text: string
  onClick: React.MouseEventHandler
  icon?: IconStyles
  iconOnly?: boolean
  disabled?: boolean
  style?: React.CSSProperties
}

export default function Button(props: ButtonProps) {
  const {
    variant = 'filled',
    text,
    onClick,
    icon,
    iconOnly = false,
    disabled = false,
    ...rest
  } = props

  const className = () => {
    return `${iconOnly ? 'icon-button' : `button button-${variant}`} ${
      disabled ? 'disabled' : ''
    }`
  }

  return (
    <button className={className()} onClick={onClick} {...rest}>
      {icon ? <Icon icon={icon} /> : ''}
      {!iconOnly && <span>{text}</span>}
    </button>
  )
}
