import { IconStyles } from '../Icon'

export interface NavItemProps {
  icon: IconStyles
  onClick: Function
  label?: string
  match?: boolean
}
