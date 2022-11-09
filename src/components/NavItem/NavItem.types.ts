import { IconVariants } from '../Icon'

export interface NavItemProps {
  icon: IconVariants.IconStyles
  onClick: Function
  label?: string
  match?: boolean
}
