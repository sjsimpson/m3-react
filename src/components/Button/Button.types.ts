import { ButtonStyles } from './ButtonVariants'
import { IconVariants } from '../Icon'

export interface ButtonProps {
  type: ButtonStyles
  text: string
  onClick: Function
  icon?: IconVariants.IconStyles
  iconOnly?: boolean
  disabled?: boolean
}
