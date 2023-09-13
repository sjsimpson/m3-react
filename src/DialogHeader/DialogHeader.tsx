import '../../scss/Dialog.scss'

import React from 'react'

interface DialogHeaderProps {
  children: React.ReactNode
}

export default function DialogHeader(props: DialogHeaderProps) {
  return <div className="modal-header">{props.children}</div>
}
