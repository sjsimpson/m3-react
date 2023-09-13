import '../../scss/Dialog.scss'

import React from 'react'

interface DialogContentProps {
  children: React.ReactNode
}

export default function DialogContent(props: DialogContentProps) {
  return <div className="modal-content">{props.children}</div>
}
