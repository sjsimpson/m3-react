import React, { FC } from 'react'

import './Button.scss'
import { ButtonProps } from './Button.types'
import Icon from '../Icon'

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className={
        props.disabled
          ? props.iconOnly
            ? `icon-button disabled`
            : `button ${props.type} disabled`
          : props.iconOnly
          ? `icon-type`
          : `button ${props.type}`
      }
      onClick={() => {
        props.onClick()
      }}
    >
      {props.icon ? <Icon icon={props.icon} /> : ''}
      {!props.iconOnly && <span>{props.text}</span>}
    </button>
  )
}

export default Button
