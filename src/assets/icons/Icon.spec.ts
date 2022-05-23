import { MutableRefObject } from 'react'

export interface IconProps {
  // Class name for icon styling
  className?: string;
  // Ref setter
  itemRef?: MutableRefObject<SVGSVGElement | null>;
}