import './TopNav.scss'

import React, { FC } from 'react'
import { TopNavProps } from './TopNav.types'

const TopNav: FC<TopNavProps> = (props: TopNavProps) => {

  return (
    <div className="top-nav">
      <section className="top-nav-left">
        {props.leftSection}
      </section>
      <section className="top-nav-right">
        {props.rightSection}
      </section>
    </div>
  )
}

export default TopNav
