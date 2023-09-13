import '../../scss/Dialog.scss'

import React from 'react'
import { clsx } from 'clsx'

import { DialogSizes } from './Dialog.types'

interface DialogProps {
  children: React.ReactNode
  open: boolean
  size: DialogSizes
}

export default function Dialog(props: DialogProps) {
  const { size, open, children } = props
  return (
    <div
      className={clsx(
        'modal-container',
        open && 'open',
        size === 'small' && 'sm',
        size === 'medium' && 'md',
        size === 'large' && 'lg',
      )}
    >
      {open && children}
    </div>
  )
}
