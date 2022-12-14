import './DrawerItem.scss'

import React, { FC } from 'react'
import Icon from '../Icon'

import { DrawerItemProps } from './DrawerItem.types'

const DrawerItem: FC<DrawerItemProps> = (props: DrawerItemProps) => {
  const handleClick = (event: any) => {
    event.preventDefault()
    props.onClick()
  }

  return (
    <a
      className={
        props.match == undefined
          ? 'drawer-item'
          : props.match
          ? 'drawer-item active'
          : 'drawer-item'
      }
      onClick={handleClick}
    >
      <span
        className={props.label ? 'icon-container has-label' : 'icon-container'}
      >
        <Icon icon={props.icon} />
      </span>
      {props.label && <div className="drawer-label">{props.label}</div>}
    </a>
  )
}

export default DrawerItem
