import '../../scss/TopNav.scss'

import React from 'react'

interface TopNavProps {
  leftSection?: JSX.Element
  rightSection?: JSX.Element
}

export default function TopNav(props: TopNavProps) {
  return (
    <div className="top-nav">
      <section className="top-nav-left">{props.leftSection}</section>
      <section className="top-nav-right">HELLO WORLD</section>
    </div>
  )
}
