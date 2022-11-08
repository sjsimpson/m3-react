import './Icon.scss'

import React, { FC } from 'react'
import { IconProps } from './Icon.types'

const Icon: FC<IconProps> = (props: IconProps) => {
  return (
    <span
      onClick={() => {
        props.onClick && props.onClick()
      }}
      className={`material-symbols-outlined ${props.color}`}
    >
      {props.icon}
    </span>
  )
}

export default Icon
