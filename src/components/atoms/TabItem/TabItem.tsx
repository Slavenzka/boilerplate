import { FC, memo, PropsWithChildren } from 'react'
import css from './TabItem.module.scss'
import classnames from 'classnames'
import Button from 'components/atoms/Button/Button'
import { TabItemProps } from 'components/atoms/TabItem/TabItem.spec'
import { TabVariants } from 'components/molecules/Tabs/Tabs.spec'
import { ButtonHeights, ButtonVariants } from 'components/atoms/Button/Button.spec'

const TabItem: FC<PropsWithChildren<TabItemProps>> = ({
  children,
  className,
  isActive,
  onClick,
  TagName = `li`,
  variant = TabVariants.DEFAULT,
  ...props
}) => {
  const isButtonsStyle = variant === TabVariants.BUTTONS

  return (
    <TagName
      className={classnames(css.wrapper, className, {
        [css.wrapperDefault]: variant === TabVariants.DEFAULT,
        [css.wrapperLight]: variant === TabVariants.LIGHT,
        [css.wrapperButton]: isButtonsStyle,
        [css.wrapperActive]: isActive
      })}
      {...props}
    >
      <Button
        onClick={onClick}
        isDisabled={isActive}
        className={css.button}
        height={isButtonsStyle
          ? ButtonHeights.LARGE
          : ButtonHeights.AUTO
        }
        variant={isButtonsStyle
          ? ButtonVariants.FILLED_DARK
          : ButtonVariants.DEFAULT
        }
      >
        {children}
      </Button>
    </TagName>
  )
}

export default memo(TabItem)