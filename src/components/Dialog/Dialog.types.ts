import { MouseEventHandler } from 'react'

export interface DialogProps {
  header: string
  content: JSX.Element
  footer: JSX.Element
  handleClose: MouseEventHandler
}
