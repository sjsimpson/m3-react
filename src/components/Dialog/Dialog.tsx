import './Dialog.scss'

import React, { FC } from 'react'

import { DialogProps } from './Dialog.types'
import Icon, { IconVariants } from '../Icon'

const Dialog: FC<DialogProps> = (props: DialogProps) => {
  return (
    <div className="modal-container">
      <div className="modal-header">
        <div className="header-text">{props.header}</div>
        <div className="close-button-container">
          <div className="close-button" onClick={props.handleClose}>
            <Icon icon={IconVariants.IconStyles.close} />
          </div>
        </div>
      </div>
      <div className="modal-content">{props.content}</div>
      <div className="modal-footer">{props.footer}</div>
    </div>
  )
}

export default Dialog
