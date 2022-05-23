import { PropsWithClassName } from 'specs/index.spec'
import { ElementType, MouseEventHandler } from 'react'

export enum ButtonVariants {
  DEFAULT = `DEFAULT`,
  ICON_DECORATED = `ICON_DECORATED`,
  ICON_SIMPLE = `ICON_SIMPLE`,
  FILLED_DARK = `FILLED_DARK`,
  FILLED_GRAY = `FILLED_GRAY`,
  LINK = `LINK`,
  FILTER_SINGLE_VALUE = `FILTER_SINGLE_VALUE`,
  MULTI_VALUE_FILTER_PASSIVE = `MULTI_VALUE_FILTER_PASSIVE`,
  MULTI_VALUE_FILTER_ACTIVE = `MULTI_VALUE_FILTER_ACTIVE`,
  BORDERED_DARK = `BORDERED_DARK`
}

export enum ButtonHeights {
  TINY = `TINY`,
  SMALL = `SMALL`,
  REGULAR = `REGULAR`,
  LARGE = `LARGE`,
  AUTO = `AUTO`
}

export enum ButtonTypes {
  BUTTON = `button`,
  SUBMIT = `submit`
}

export interface ExtraButtonProps {
  type: string
}

interface ExtraRouterLinkProps {
  to: string
}

interface ExtraLinkProps {
  href: string;
  rel: `noopener norefferer`,
  target: `_blank`
}

export type ExtraProps = ExtraButtonProps | ExtraRouterLinkProps | ExtraLinkProps

export type ButtonClickHandlerType = MouseEventHandler

export interface ButtonAsButtonProps {
  /*
  * Adds styling for the loading state of the button
  */
  isLoading?: boolean;
  /*
  * Definition of button type
  */
  type?: string;
  /*
  * Button click handler
  */
  onClick?: ButtonClickHandlerType;
  onMouseUp?: ButtonClickHandlerType;
  onMouseDown?: ButtonClickHandlerType;
}

export interface ButtonAsLinkProps {
  /*
  * Triggers component to render a link instead of a button. If URL string contains "http" then it would be a web link,
  * and react router link otherwise.
  */
  url?: string;
}

export interface DefaultButtonProps extends PropsWithClassName {
  /*
  * Adds styling for the disabled state of the button
  */
  isDisabled?: boolean;
  /*
  * Self explanatory html tag property
  */
  tabIndex?: string;
}

export interface SingleValueFilterButtonProps {
  counter?: number | JSX.Element;
  isActive?: boolean;
}

export interface ButtonProps extends PropsWithClassName, DefaultButtonProps, ButtonAsLinkProps, ButtonAsButtonProps {
  /*
  * Triggers button height style presets
  */
  height?: ButtonHeights;
  /*
  * A way to provide icon component for ButtonVariants.ICON render with style presets for both button and rendered icon
  */
  IconComponent?: ElementType;
  /*
  * Triggers custom button variant to render through the switch statement
  */
  variant?: ButtonVariants;
}