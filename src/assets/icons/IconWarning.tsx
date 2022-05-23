import { IconProps } from 'assets/icons/Icon.spec'

function IconWarning ({
  className
}: IconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
      <path d="M 45 88.11 h 40.852 c 3.114 0 5.114 -3.307 3.669 -6.065 L 48.669 4.109 c -1.551 -2.959 -5.786 -2.959 -7.337 0 L 0.479 82.046 c -1.446 2.758 0.555 6.065 3.669 6.065 H 45 z" transform="matrix(1 0 0 1 0 0)" strokeLinecap="round" />
      <path
        d="M 45 64.091 L 45 64.091 c -1.554 0 -2.832 -1.223 -2.9 -2.776 l -2.677 -25.83 c -0.243 -3.245 2.323 -6.011 5.577 -6.011 h 0 c 3.254 0 5.821 2.767 5.577 6.011 L 47.9 61.315 C 47.832 62.867 46.554 64.091 45 64.091 z"
        transform="matrix(1 0 0 1 0 0)"
        strokeLinecap="round"
        data-warning-sign="true"
      />
      <circle
        cx="44.995999999999995"
        cy="74.02600000000001"
        r="4.626"
        transform="matrix(1 0 0 1 0 0)"
        fill="red"
        data-warning-sign="true"
      />
    </svg>
  )
}

export default IconWarning