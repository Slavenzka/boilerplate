import React from 'react'
import { IconProps } from 'assets/icons/Icon.spec'

function IconDots ({
  className
}: IconProps) {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
      <path d='M16,10c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3S14.3,10,16,10z' />
      <path d='M16,13c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,13,16,13z' />
      <path d='M16,22c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,22,16,22z' />
    </svg>
  )
}

export default IconDots