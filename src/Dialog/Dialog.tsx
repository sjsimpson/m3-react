import '../../scss/Dialog.scss'

import React from 'react'
import { clsx } from 'clsx'

import { DialogSizes } from './Dialog.types'

interface DialogProps extends React.HTMLProps<HTMLDivElement> {
  open: boolean
  modalSize: DialogSizes
  innerProps?: Partial<React.HTMLProps<HTMLDivElement>>
}

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  const {
    modalSize,
    open,
    children,
    className,
    innerProps = {},
    ...other
  } = props

  return (
    <div
      ref={ref}
      {...other}
      className={clsx(
        className,
        'modal-container',
        open && 'open',
        modalSize === 'small' && 'sm',
        modalSize === 'medium' && 'md',
        modalSize === 'large' && 'lg',
      )}
    >
      <div
        {...innerProps}
        className={clsx(innerProps?.className, 'modal-inner')}
      >
        {open && children}
      </div>
    </div>
  )
})

export default Dialog
