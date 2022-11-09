import { TextInputColors, TextInputStyles } from './TextInputVariants'
import { IconVariants } from '../Icon'

export interface TextInputProps {
  id: string
  value: string
  onInput: Function
  placeholder: string
  inputStyle: TextInputStyles
  background: TextInputColors
  type?: string
  icon?: IconVariants.IconStyles
  disabled?: boolean
}
