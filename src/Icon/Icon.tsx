import '../../scss/Icon.scss'

import React from 'react'
import { IconStyles, IconColors } from './Icon.types'

interface IconProps {
  icon: IconStyles
  color?: IconColors
  onClick?: Function
}

export default function Icon(props: IconProps) {
  return (
    <span
      onClick={() => {
        props.onClick && props.onClick()
      }}
      className={`material-symbols-outlined ${props.color ?? ''}`}
    >
      {props.icon}
    </span>
  )
}
