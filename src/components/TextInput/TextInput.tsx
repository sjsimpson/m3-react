import './TextInput.scss'

import React, { FC } from 'react'
import { TextInputProps } from './TextInput.types'
import Icon, { IconVariants } from '../Icon'

const TextInput: FC<TextInputProps> = (props: TextInputProps) => {
  let [active, setActive] = React.useState<boolean>(false)

  const handleInput = (event: any) => {
    event.preventDefault()
    console.log(event)

    props.onInput(event.target.value)
  }

  const handleClick = () => {
    const input = document.getElementById(props.id)
    input?.focus()
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
            {props.placeholder}
          </label>
          <input
            id={props.id}
            value={props.value}
            type={props.type}
            className={active || props.value ? 'active' : ''}
            onInput={handleInput}
            placeholder={active ? props.placeholder : ''}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
          />
        </div>
        <div className="clear-text-input-container">
          {props.value && (
            <Icon
              onClick={() => {
                props.onInput('')
              }}
              icon={IconVariants.IconStyles.cancel}
              color={IconVariants.IconColors.onSurfaceVariant}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default TextInput
