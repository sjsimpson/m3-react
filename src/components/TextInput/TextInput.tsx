import './TextInput.scss'

import React, { FC } from 'react'
import { TextInputProps } from './TextInput.types'
import Icon, { IconVariants } from '../Icon'

const TextInput: FC<TextInputProps> = (props: TextInputProps) => {
  let [active, setActive] = React.useState<boolean>(false)

  const handleClick = () => {
    const input = document.getElementById(props.id)
    input?.focus()
  }

  const defaultEventHandler = (event: any) => {
    event.preventDefault()
  }

  return (
    <div
      className={
        props.disabled
          ? `text-input ${props.inputStyle} disabled`
          : active
          ? `text-input ${props.inputStyle} active`
          : `text-input ${props.inputStyle}`
      }
      onClick={handleClick}
    >
      <div className="text-input-content">
        {props.icon && (
          <div className="icon-container">
            <Icon
              icon={props.icon}
              color={IconVariants.IconColors.onSurfaceVariant}
            />
          </div>
        )}
        <div className="text-input-container">
          <label
            className={
              active || props.value
                ? props.icon
                  ? `${props.background} has-icon active`
                  : `${props.background} active`
                : props.icon
                ? `${props.background} has-icon`
                : `${props.background}`
            }
          >
            {props.label}
          </label>
          <input
            id={props.id}
            value={props.value}
            type={props.type}
            className={active || props.value ? 'active' : ''}
            onInput={props.onInput ?? defaultEventHandler}
            onKeyUp={props.onKeyUp ?? defaultEventHandler}
            placeholder={active ? props.placeholder : ''}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default TextInput
