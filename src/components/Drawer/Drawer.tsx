import './Drawer.scss'

import React, { FC } from 'react'
import { DrawerProps } from './Drawer.types'

const Drawer: FC<DrawerProps> = (props: DrawerProps) => {
  return (
    <>
      <nav className={props.isOpen ? 'drawer drawer--open' : 'drawer'}>
        <div className="drawer-content-top">{props.drawerContentTop}</div>
        <div className="drawer-content-bottom">{props.drawerContentBottom}</div>
      </nav>
      <div
        className={
          props.isOpen
            ? 'drawer-background drawer-background--open'
            : 'drawer-background'
        }
        onClick={props.handleCloseDrawer}
      />
    </>
  )
}

export default Drawer
