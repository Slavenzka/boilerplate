export interface PropsWithClassName {
  className?: string;
}

export type DisplayTypes = `block` | `flex` | `grid` | `none`

export interface PropsFormElement<ValueType> {
  value: ValueType,
  onChange: (args: ValueType) => void;
  name?: string;
}
