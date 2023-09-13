import '../../scss/SideNav.scss'

import React from 'react'

interface SideNavProps {
  topSection?: JSX.Element
  bottomSection?: JSX.Element
}

export default function SideNav(props: SideNavProps) {
  return (
    <div className="side-nav">
      <section className="side-nav-top">{props.topSection}</section>
      <section className="side-nav-bottom">{props.bottomSection}</section>
    </div>
  )
}
