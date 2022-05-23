import { FC, HTMLAttributes, memo } from 'react'
import css from './Input.module.scss'
import classnames from 'classnames'
import FormItemError from 'components/atoms/FormItemError/FormItemError'
import InputLabel from 'components/atoms/InputLabel/InputLabel'
import IconCheck from 'assets/icons/IconCheck'
import IconSearch from 'assets/icons/IconSearch'
import { InputDefaultProps, InputProps, InputTypes, InputVariants } from 'components/atoms/Input/Input.spec'
import { InputLabelVariants } from 'components/atoms/InputLabel/InputLabel.spec'
import IconCalendar from 'assets/icons/IconCalendar'
import Button from 'components/atoms/Button/Button'
import { ButtonVariants } from 'components/atoms/Button/Button.spec'
import IconEye from 'assets/icons/IconEye'
import PasswordInputController from 'components/organisms/controllers/PasswordInputController/PasswordInputController'

export const InputDefault: FC<InputDefaultProps> = memo(({
  children,
  className,
  error,
  isErrorRenderRequired = true,
  formRef,
  isRequired,
  label,
  labelVariant = InputLabelVariants.DEFAULT,
  inputType = InputTypes.TEXT,
  variant,
  ...restProps
}) => {
  const isTextArea = inputType === InputTypes.TEXTAREA
  const isInputHidden = inputType === InputTypes.CHECKBOX
  const isInputCalendar = variant === InputVariants.CALENDAR_DEFAULT
  const isCheckbox = variant === InputVariants.CHECKBOX_DEFAULT

  const TagName = isTextArea
    ? inputType
    : `input`

  const extraProps = isTextArea
    ? {}
    : {type: inputType}

  const input = (
    <>
      <TagName
        className={classnames(css.input, {
          [css.inputHidden]: isInputHidden,
          [css.inputCalendar]: isInputCalendar,
          [className as string]: !label,
          [css.inputError]: !label && Boolean(error)
        })}
        {...extraProps}
        {...restProps}
        ref={formRef}
      />
      {error && isErrorRenderRequired &&
        <FormItemError
          message={error}
        />
      }
    </>
  )

  if (!label) return input

  return (
    <InputLabel
      className={classnames(css.wrapper, className, {
        [css.wrapperRequired]: isRequired,
        [css.wrapperError]: Boolean(error)
      })}
      classNameLabel={classnames({
        [css.labelNoMargin]: isCheckbox
      })}
      isRequired={isRequired}
      label={label}
      variant={labelVariant as InputLabelVariants}
    >
      { children }
      { input }
      {error && isErrorRenderRequired &&
        <FormItemError
          className={css.error}
          message={error}
        />
      }
    </InputLabel>
  )
})

function Input ({
  checked,
  className,
  variant = InputVariants.DEFAULT,
  ...restProps
}: InputProps & HTMLAttributes<HTMLInputElement>) {
  switch (variant) {
    case InputVariants.CALENDAR_DEFAULT: {
      return (
        <InputDefault
          className={className}
          variant={variant}
          {...restProps}
        >
          <IconCalendar className={css.iconCalendar} />
        </InputDefault>
      )
    }
    case InputVariants.CHECKBOX_DEFAULT: {
      return (
        <InputDefault
          checked={checked}
          className={classnames(css.checkboxDefault, className, {
            [css.checkboxDefaultChecked]: Boolean(checked)
          })}
          inputType={InputTypes.CHECKBOX}
          variant={variant}
          {...restProps}
        >
          {checked && <IconCheck className={css.iconCheck} />}
        </InputDefault>
      )
    }
    case InputVariants.SEARCH: {
      return (
        <InputDefault
          className={classnames(className, css.wrapperSearch)}
          {...restProps}
        >
          <IconSearch className={css.iconSearch} />
        </InputDefault>
      )
    }
    case InputVariants.UNDERLINED: {
      return (
        <InputDefault
          className={classnames(className, css.wrapperUnderlined)}
          {...restProps}
        />
      )
    }
    case InputVariants.MULTI_VALUE_FILTER: {
      return (
        <InputDefault
          className={classnames(className, css.multiValueFilter)}
          {...restProps}
        />
      )
    }
    case InputVariants.PASSWORD_UNDERLINED: {
      return (
        <PasswordInputController>
          {({inputType, toggleInputType}) => (
            <InputDefault
              className={classnames(className, css.wrapperUnderlined)}
              inputType={inputType}
              {...restProps}
            >
              <Button
                className={css.buttonPassword}
                onMouseDown={toggleInputType}
                onMouseUp={toggleInputType}
                variant={ButtonVariants.ICON_SIMPLE}
                tabIndex="-1"
              >
                <IconEye className={css.iconVisibility} />
              </Button>
            </InputDefault>
          )}
        </PasswordInputController>
      )
    }
    default:
      return (
        <InputDefault
          className={className}
          {...restProps}
        />
      )
  }
}

export default memo(Input)