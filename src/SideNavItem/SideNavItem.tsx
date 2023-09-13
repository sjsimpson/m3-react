import '../../scss/SideNavItem.scss'

import React from 'react'
import Icon, { IconStyles } from '../Icon'

interface SideNavItemProps {
  icon: IconStyles
  onClick: Function
  label?: string
  match?: boolean
}

export default function SideNavItem(props: SideNavItemProps) {
  const handleClick = (event: any) => {
    event.preventDefault()
    props.onClick()
  }

  return (
    <a
      className={
        props.match == undefined
          ? 'nav-item'
          : props.match
          ? 'nav-item active'
          : 'nav-item'
      }
      onClick={handleClick}
    >
      <span
        className={props.label ? 'icon-container has-label' : 'icon-container'}
      >
        <span className="state-layer">
          <Icon icon={props.icon} />
        </span>
      </span>
      {props.label && <div className="nav-label">{props.label}</div>}
    </a>
  )
}
