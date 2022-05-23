import { memo, PropsWithChildren } from 'react'
import css from './Button.module.scss'
import classnames from 'classnames'
import { ButtonHeights, ButtonProps, ButtonVariants, SingleValueFilterButtonProps } from './Button.spec'
import ButtonDefault from 'components/atoms/Button/ButtonDefault'
import IconSpinner from 'assets/icons/IconSpinner'
import IconSearch from 'assets/icons/IconSearch'

function Button ({
  className,
  height = ButtonHeights.REGULAR,
  IconComponent,
  variant = ButtonVariants.DEFAULT,
  ...restProps
}: PropsWithChildren<ButtonProps> & Partial<SingleValueFilterButtonProps>) {
  const heightClassName = classnames({
    [css.buttonHeightTiny]: height === ButtonHeights.TINY,
    [css.buttonHeightSmall]: height === ButtonHeights.SMALL,
    [css.buttonHeightRegular]: height === ButtonHeights.REGULAR,
    [css.buttonHeightLarge]: height === ButtonHeights.LARGE,
  })

  switch (variant) {
    case ButtonVariants.BORDERED_DARK: {
      return (
        <ButtonDefault
          className={classnames(className, heightClassName, css.buttonBordered, css.buttonDark)}
          {...restProps}
        />
      )
    }
    case ButtonVariants.FILLED_GRAY: {
      return (
        <ButtonDefault
          className={classnames(className, heightClassName, css.buttonFilled, css.buttonGray)}
          {...restProps}
        />
      )
    }
    case ButtonVariants.FILLED_DARK: {
      return (
        <ButtonDefault
          className={classnames(className, heightClassName, css.buttonFilled, css.buttonDark)}
          {...restProps}
        />
      )
    }
    case ButtonVariants.LINK: {
      return (
        <ButtonDefault
          className={classnames(className, css.buttonLink)}
          {...restProps}
        />
      )
    }
    case ButtonVariants.ICON_SIMPLE:
    case ButtonVariants.ICON_DECORATED: {
      return (
        <ButtonDefault
          className={classnames(className, {
            [css.buttonIconDecorated]: variant === ButtonVariants.ICON_DECORATED,
            [css.buttonIconSimple]: variant === ButtonVariants.ICON_SIMPLE,
          })}
          {...restProps}
        >
          {IconComponent
            ? <IconComponent className={css.icon} />
            : restProps.children
          }
        </ButtonDefault>
      )
    }
    case ButtonVariants.FILTER_SINGLE_VALUE: {
      const {
        isActive,
        isLoading,
        isDisabled,
        counter,
        children,
        ...rest
      } = restProps

      return (
        <ButtonDefault
          className={classnames(className, css.buttonHeightLarge, css.singleValueFilter, {
            [css.singleValueFilterActive]: isActive,
            [css.singleValueFilterDisabled]: isLoading || isDisabled
          })}
          {...rest}
        >
          {children}
          {isLoading
            ? <IconSpinner className={css.spinnerCounter} />
            : (
              <span className={css.counter}>
                {counter}
              </span>
            )
          }
        </ButtonDefault>
      )
    }
    case ButtonVariants.MULTI_VALUE_FILTER_ACTIVE:
    case ButtonVariants.MULTI_VALUE_FILTER_PASSIVE: {
      return (
        <ButtonDefault
          className={classnames(className, css.multiValueFilter, {
            [css.multiValueFilterActive]: variant === ButtonVariants.MULTI_VALUE_FILTER_ACTIVE
          })}
          {...restProps}
        >
          <IconSearch className={css.iconSearch} />
          Поиск по параметрам
        </ButtonDefault>
      )
    }
    default:
      return (
        <ButtonDefault
          className={classnames(className, heightClassName)}
          {...restProps}
        />
      )
  }
}

export default memo(Button)