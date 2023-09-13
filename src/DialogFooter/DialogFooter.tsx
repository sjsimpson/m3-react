import '../../scss/Dialog.scss'

import React from 'react'

interface DialogFooterProps {
  children: React.ReactNode
}

export default function DialogFooter(props: DialogFooterProps) {
  return <div className="modal-footer">{props.children}</div>
}
