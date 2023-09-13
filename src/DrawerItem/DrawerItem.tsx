import '../../scss/DrawerItem.scss'

import React from 'react'
import Icon, { IconStyles } from '../Icon'

interface DrawerItemProps {
  icon: IconStyles
  onClick: Function
  label?: string
  match?: boolean
}

export default function DrawerItem(props: DrawerItemProps) {
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
      <span className="state-layer">
        <span
          className={
            props.label ? 'icon-container has-label' : 'icon-container'
          }
        >
          <Icon icon={props.icon} />
        </span>
        {props.label && <div className="drawer-label">{props.label}</div>}
      </span>
    </a>
  )
}
