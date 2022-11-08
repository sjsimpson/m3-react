import './TextInput.scss'

import * as React from 'react'
import { TextInputProps } from './TextInput.types'
import Icon, { IconColors, IconStyles } from '../Icon'

const TextInput = (props: TextInputProps) => {
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
            <Icon icon={props.icon} color={IconColors.onSurfaceVariant} />
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
              icon={IconStyles.cancel}
              color={IconColors.onSurfaceVariant}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default TextInput
