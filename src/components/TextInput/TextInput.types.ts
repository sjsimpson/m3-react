import { TextInputColors, TextInputStyles } from './TextInputVariants'
import { IconVariants } from '../Icon'
import { FormEventHandler, KeyboardEventHandler } from 'react'

export interface TextInputProps {
  id: string
  label: string
  value: string
  onInput: FormEventHandler<HTMLInputElement>
  inputStyle: TextInputStyles
  background: TextInputColors
  placeholder?: string
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>
  type?: string
  icon?: IconVariants.IconStyles
  disabled?: boolean
}
