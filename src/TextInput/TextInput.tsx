import '../../scss/TextInput.scss'

import React, { useEffect, useImperativeHandle, useRef } from 'react'
import Icon, { IconStyles } from '../Icon'
import { TextInputStyles, TextInputColors } from './TextInput.types'
import { clsx } from 'clsx'

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  label: string
  inputStyle: TextInputStyles
  background: TextInputColors
  icon?: IconStyles
}
const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const {
      value,
      label,
      inputStyle,
      disabled,
      background,
      icon,
      className,
      ...other
    } = props

    const [active, setActive] = React.useState<boolean>(false)

    const inputRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => inputRef.current!)

    useEffect(() => {
      if (active) {
        inputRef.current?.focus()
      }
    }, [active])

    const handleClick = () => {
      setActive(true)
    }

    const defaultEventHandler = (event: any) => {
      event.preventDefault()
    }

    return (
      <div
        className={clsx(
          'text-input',
          inputStyle,
          disabled && 'disabled',
          active && 'active',
        )}
        onClick={handleClick}
      >
        <div className="text-input-content">
          {icon && (
            <div className="icon-container">
              <Icon icon={icon} color="on-surface-variant" />
            </div>
          )}
          <div className="text-input-container">
            <label
              className={clsx(
                background,
                (active || value) && 'active',
                icon && 'has-icon',
              )}
            >
              {label}
            </label>
            <input
              ref={inputRef}
              {...other}
              className={clsx((active || value) && 'active', className)}
              value={value}
              onInput={props.onInput ?? defaultEventHandler}
              onKeyUp={props.onKeyUp ?? defaultEventHandler}
              placeholder={active ? props.placeholder : ''}
              onFocus={() => setActive(true)}
              onBlur={() => setActive(false)}
            />
          </div>
        </div>
        <div className="state-layer" />
      </div>
    )
  },
)

export default TextInput
