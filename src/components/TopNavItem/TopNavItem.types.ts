import { IconVariants } from '../Icon'

export interface TopNavItemProps {
  icon: IconVariants.IconStyles
  onClick: Function
  label?: string
  match?: boolean
}
