import { memo } from 'react'
import { IconProps } from 'assets/icons/Icon.spec'

function IconIconLike ({
  className
}: IconProps) {
  return (
    <svg className={className} viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.666667,0 C11.691987,0 13.333287,1.66667 13.333287,4 C13.333287,8.66667 8.333337,11.3333 6.666667,12.3333 C5,11.3333 -3.88578059e-16,8.66667 -3.88578059e-16,4 C-3.88578059e-16,1.66667 1.666667,0 3.666667,0 C4.906667,0 6,0.666667 6.666667,1.33333 C7.333337,0.666667 8.426667,0 9.666667,0 Z M7.289337,10.4027 C7.876667,10.032 8.406667,9.66333 8.902667,9.26867 C10.889987,7.68867 11.999987,5.962 11.999987,4 C11.999987,2.42667 10.975287,1.33333 9.666667,1.33333 C8.949337,1.33333 8.173337,1.71333 7.609337,2.276 L6.666667,3.21867 L5.723997,2.276 C5.159997,1.71333 4.383997,1.33333 3.666667,1.33333 C2.373337,1.33333 1.333337,2.43733 1.333337,4 C1.333337,5.96267 2.443997,7.68867 4.429997,9.26867 C4.926667,9.66333 5.456667,10.032 6.043997,10.402 C6.243337,10.528 6.440667,10.6487 6.666667,10.7833 C6.892667,10.6487 7.089997,10.528 7.289337,10.4027 L7.289337,10.4027 Z" />
    </svg>
  )
}

export default memo(IconIconLike)