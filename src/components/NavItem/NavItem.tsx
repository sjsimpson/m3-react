import './NavItem.scss'

import React, { FC } from 'react'
import { NavItemProps } from './NavItem.types'
import Icon from '../Icon'

const NavItem: FC<NavItemProps> = (props: NavItemProps) => {
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
        <Icon icon={props.icon} />
      </span>
      {props.label && <div className="nav-label">{props.label}</div>}
    </a>
  )
}

export default NavItem
