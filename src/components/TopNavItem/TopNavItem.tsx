import './TopNavItem.scss'

import React, { FC } from 'react'
import { TopNavItemProps } from './TopNavItem.types'
import Icon from '../Icon'

const TopNavItem: FC<TopNavItemProps> = (props: TopNavItemProps) => {
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
        <Icon icon={props.icon} />
      </span>
      {props.label && <div className="nav-label">{props.label}</div>}
    </a>
  )
}

export default TopNavItem
