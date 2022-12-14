import { IconVariants } from '../Icon'

export interface SideNavItemProps {
  icon: IconVariants.IconStyles
  onClick: Function
  label?: string
  match?: boolean
}
