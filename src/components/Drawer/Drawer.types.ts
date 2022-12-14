import { MouseEventHandler } from 'react'

export interface DrawerProps {
  isOpen: boolean
  handleCloseDrawer: MouseEventHandler
  drawerContentBottom?: JSX.Element
  drawerContentTop?: JSX.Element
}
