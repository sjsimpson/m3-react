import '../../scss/LoadingSpinner.scss'

import React from 'react'

import { LoadingSpinnerSizes } from './LoadingSpinner.types'

interface LoadingSpinnerProps {
  size: LoadingSpinnerSizes
}

export default function LoadingSpinner(props: LoadingSpinnerProps) {
  return (
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
}
