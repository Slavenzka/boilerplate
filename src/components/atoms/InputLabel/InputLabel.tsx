import { memo, PropsWithChildren } from 'react'
import css from './InputLabel.module.scss'
import classnames from 'classnames'
import { decode } from 'he'
import { InputLabelProps, InputLabelVariants } from 'components/atoms/InputLabel/InputLabel.spec'

function InputLabel ({
  children,
  className,
  classNameLabel,
  isRequired,
  label,
  variant = InputLabelVariants.DEFAULT
}: PropsWithChildren<InputLabelProps>) {
  return (
    <label
      className={classnames(css.wrapper, className, {
        [css.wrapperRequired]: isRequired && Boolean(label),
        [css.wrapperDark]: variant === InputLabelVariants.DARK
      })}
    >
      {label && (
        <span
          className={classnames(css.label, classNameLabel)}
        >
          {typeof label === `string`
            ? decode(label)
            : label
          }
        </span>
      )}
      { children }
    </label>
  )
}

export default memo(InputLabel)