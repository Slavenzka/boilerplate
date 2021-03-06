import {
  PropsFormElement,
  PropsWithClassName
} from 'specs/index.spec'
import { ElementType, ReactNode } from 'react'
import { GroupBase, SingleValue } from 'react-select'
import { FieldError, RefCallBack } from 'react-hook-form'

export enum SelectVariants {
  DEFAULT = `DEFAULT`
}

export interface SelectCustomOptionType<T = string> {
  label: string | number,
  value: T
}

export interface SelectCustomComponentProps {
  [key: string]: number | string | ReactNode | `() => void`;
}

interface RenderFunctionTypes {
  innerProps: SelectCustomComponentProps,
  props: SelectCustomComponentProps,
  className: string,
  children: ReactNode
}

export interface SelectCustomRenderIndicatorFunction<T = JSX.Element> {
  ({
    innerProps,
    props,
    className,
    children
  }: Partial<RenderFunctionTypes>): T
}

export interface SelectCustomRenderOptionFunction<T = JSX.Element> {
  ({
    props,
    className,
    children
  }: {
    className?: string;
    props: SelectCustomComponentProps;
    children?: ReactNode;
  }): T
}

export interface SelectCustomClickHandlerType<Type> {
  (evt: SingleValue<SelectCustomOptionType<Type>>): void;
}

export interface SelectCustomProps<ValueType = string> extends
  PropsWithClassName,
  PropsFormElement<SingleValue<ValueType>>
{
  error?: string | FieldError
  /*
  * Select label text
  */
  label?: string;
  formRef?: RefCallBack,
  /*
  * Applies "is disabled" styles
  */
  isDisabled?: boolean;
  /*
  * Applies "is loading" styles and replaces dropdown indicator with a spinner
  */
  isLoading?: boolean;
  /*
  * Applies "is required" styles
  */
  isRequired?: boolean;
  /*
  * List of all available options
  */
  options:  (ValueType | GroupBase<ValueType>)[];
  /*
  * Render function for the external icon to replace default one
  */
  renderCustomIndicator?: SelectCustomRenderIndicatorFunction;
  /*
  * Render function for the external custom option component
  */
  renderCustomOption?: SelectCustomRenderOptionFunction;
  /*
  * Spinner icon component for "is loading" state
  */
  Spinner?: ElementType;
  /*
  * Defines style presets
  */
  variant?: SelectVariants;
}