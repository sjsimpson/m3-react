import { IconVariants } from '../Icon'

export interface DrawerItemProps {
  icon: IconVariants.IconStyles
  onClick: Function
  label?: string
  match?: boolean
}
