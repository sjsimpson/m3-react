import '../../scss/TextInput.scss'

import React from 'react'
import Icon, { IconStyles } from '../Icon'
import { TextInputStyles, TextInputColors } from './TextInput.types'

interface TextInputProps {
  id: string
  label: string
  value: string
  onInput: React.FormEventHandler<HTMLInputElement>
  inputStyle: TextInputStyles
  background: TextInputColors
  placeholder?: string
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>
  type?: string
  icon?: IconStyles
  disabled?: boolean
}
export default function TextInput(props: TextInputProps) {
  const [active, setActive] = React.useState<boolean>(false)

  const handleClick = () => {
    const input = document.getElementById(props.id)
    input?.focus()
  }

  const defaultEventHandler = (event: any) => {
    event.preventDefault()
  }

  return (
    <div
      className={`text-input ${props.inputStyle} ${
        props.disabled ? 'disabled' : ''
      } ${active ? 'active' : ''}`}
      onClick={handleClick}
    >
      <div className="text-input-content">
        {props.icon && (
          <div className="icon-container">
            <Icon icon={props.icon} color="on-surface-variant" />
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
