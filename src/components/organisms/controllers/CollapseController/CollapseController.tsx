import { memo, useCallback, useState } from 'react'
import css from './CollapseController.module.scss'
import classnames from 'classnames'
import { Collapse } from 'react-collapse'
import { CollapseControllerProps } from 'components/organisms/controllers/CollapseController/CollapseController.spec'
import IconArrowCollapse from 'assets/icons/IconArrowCollapse'

function CollapseController ({
  className,
  classNameContent,
  buttonContent,
  collapseContent,
  isDisabled,
  collapseIndicatorIcon
}: CollapseControllerProps) {
  const [isOpen, setOpenStatus] = useState(false)

  const indicatorIcon = collapseIndicatorIcon ?? <IconArrowCollapse className={css.icon} />
  
  const handleClickButton = useCallback(() => setOpenStatus(prevState => !prevState), [])
  
  return (
    <div
      className={classnames(css.wrapper, className, {
        [css.wrapperOpened]: isOpen,
        [css.wrapperDisabled]: isDisabled
      })}
    >
      {/*Have to use div as button due to possibility of non-text content, e.g. divs etc.*/}
      <div
        className={css.button}
        onClick={handleClickButton}
        role="button"
      >
        {indicatorIcon}
        {buttonContent}
      </div>
      <Collapse
        isOpened={isOpen}
        theme={{
          collapse: `ReactCollapse--collapse`,
          content: classNameContent
        }}
      >
        {collapseContent}
      </Collapse>
    </div>
  )
}

export default memo(CollapseController)