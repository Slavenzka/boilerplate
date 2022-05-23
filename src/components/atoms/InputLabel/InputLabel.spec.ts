import { ReactNode } from 'react'

export enum InputLabelVariants {
  DEFAULT = `DEFAULT`,
  DARK = `DARK`
}

export interface InputLabelProps {
  /*
  * External class name for wrapper label tag
  */
  className?: string;
  /*
  * External class name for label span containing text
  */
  classNameLabel?: string;
  /*
  * Toggles application of "required" styles
  */
  isRequired?: boolean;
  /*
  * Toggles application of "required" styles
  */
  label?: string | ReactNode;
  /*
  * Toggles style presets
  */
  variant?: InputLabelVariants;
}