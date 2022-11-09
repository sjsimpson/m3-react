import './LoadingSpinner.scss'

import React, { FC } from 'react'
import { LoadingSpinnerProps } from './LoadingSpinner.types'

const LoadingSpinner: FC<LoadingSpinnerProps> = (
  props: LoadingSpinnerProps
) => (
  <div className={`loading ${props.size}`}>
    <svg className="circular" viewBox="25 25 50 50">
      <circle
        cx={50}
        cy={50}
        r="20"
        stroke="black"
        fill="none"
        strokeWidth={3.6}
      />
    </svg>
  </div>
)

export default LoadingSpinner
