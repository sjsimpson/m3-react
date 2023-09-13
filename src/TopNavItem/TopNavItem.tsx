import '../../scss/TopNavItem.scss'

import React from 'react'
import Icon, { IconStyles } from '../Icon'

interface TopNavItemProps {
  icon: IconStyles
  onClick: Function
  label?: string
  match?: boolean
}

export default function TopNavItem(props: TopNavItemProps) {
  const handleClick = (event: any) => {
    event.preventDefault()
    props.onClick()
  }

  return (
    <a
      className={
        props.match == undefined
          ? 'top-nav-item'
          : props.match
          ? 'top-nav-item active'
          : 'top-nav-item'
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
