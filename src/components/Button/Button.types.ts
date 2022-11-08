import { ButtonStyles } from './ButtonVariants'
import { IconStyles } from '../Icon'

export interface ButtonProps {
  type: ButtonStyles
  text: string
  onClick: Function
  icon?: IconStyles
  iconOnly?: boolean
  disabled?: boolean
}
