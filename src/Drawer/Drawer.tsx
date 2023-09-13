import '../../scss/Drawer.scss'

import React from 'react'

export interface DrawerProps {
  isOpen: boolean
  handleCloseDrawer: React.MouseEventHandler
  drawerContentBottom?: JSX.Element
  drawerContentTop?: JSX.Element
}

export default function Drawer(props: DrawerProps) {
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
