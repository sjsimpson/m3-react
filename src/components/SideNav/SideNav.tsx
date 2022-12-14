import './SideNav.scss'

import React, { FC } from 'react'
import { SideNavProps } from './SideNav.types'

const SideNav: FC<SideNavProps> = (props: SideNavProps) => {

  return (
    <div className="side-nav">
      <section className="side-nav-top">
        {props.topSection}
      </section>
      <section className="side-nav-bottom">
        {props.bottomSection}
      </section>
    </div>
  )
}

export default SideNav
