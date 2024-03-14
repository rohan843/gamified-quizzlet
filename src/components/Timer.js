import React from 'react'

export default function Timer({minutes,seconds}) {
  return (
    <div>
      {minutes} <span>:</span> {seconds}
    </div>
  )
}
