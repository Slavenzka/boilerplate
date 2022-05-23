import { HTMLProps, ReactNode } from 'react'
import { PropsWithClassName } from 'specs/index.spec'

export enum InputVariants {
  DEFAULT = `DEFAULT`,
  CHECKBOX_DEFAULT = `CHECKBOX_DEFAULT`,
  UNDERLINED = `UNDERLINED`,
  SEARCH = `SEARCH`,
  CALENDAR_DEFAULT = `CALENDAR_DEFAULT`,
  PASSWORD = `PASSWORD`,
  PASSWORD_UNDERLINED = `PASSWORD_UNDERLINED`,
  MULTI_VALUE_FILTER = `MULTI_VALUE_FILTER`
}

export enum InputTypes {
  TEXTAREA = `textarea`,
  TEXT = `text`,
  NUMBER = `number`,
  TEL = `tel`,
  EMAIL = `email`,
  CHECKBOX = `checkbox`,
  PASSWORD = `password`
}

class InputLabelVariants {
}

export interface InputDefaultProps extends PropsWithClassName {
  /*
  * A flag for checkbox status management
  */
  checked?: boolean;
  /*
  * Child content
  */
  children?: ReactNode;
  /*
  * Cumulative class name form Input component wrapper
  */
  className?: string;
  /*
  * Error message to be rendered, e.g. from form state manager
  */
  error?: ReactNode;
  /*
  * Ref setter, e.g. from react-hook-form
  */
  formRef?: <T>(node: T) => void;
  /*
  * Applies styles to highlight a required field
  */
  isRequired?: boolean;
  /*
  * Provides text content for input's label wrapper
  */
  label?: string;
  /*
  * Style presets for input label
  */
  labelVariant?: InputLabelVariants;
  /*
  * Defines the type of input element
  */
  inputType?: InputTypes;
  /*
  * A flag to avoid render of error message, but keeps application of error styles. For example,
  * if global form error message would be rendered
  */
  isErrorRenderRequired?: boolean;
  /*
  * Enum value to apply corresponding style and logic presets
  */
  variant?: InputVariants;
}

export type InputProps = HTMLProps<HTMLInputElement> & InputDefaultProps & PropsWithClassName