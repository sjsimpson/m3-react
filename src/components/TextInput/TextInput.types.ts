import { TextInputColors, TextInputStyles } from './TextInputVariants'
import { IconStyles } from '../Icon'

export interface TextInputProps {
  id: string
  value: string
  onInput: Function
  placeholder: string
  inputStyle: TextInputStyles
  background: TextInputColors
  type?: string
  icon?: IconStyles
  disabled?: boolean
}
