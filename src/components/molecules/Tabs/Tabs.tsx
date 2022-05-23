import { FC, memo, useMemo } from 'react'
import css from './Tabs.module.scss'
import classnames from 'classnames'
import TabItem from 'components/atoms/TabItem/TabItem'
import { TabsProps, TabType, TabVariants } from 'components/molecules/Tabs/Tabs.spec'

const Tabs: FC<TabsProps> = ({
  activeTab,
  className,
  onTabClick,
  tabsConfig,
  variant = TabVariants.DEFAULT,
}) => {
  const items = useMemo(() => {
    return (tabsConfig || []).map((item: TabType) => (
      <TabItem
        onClick={() => onTabClick(item)}
        isActive={item.id === activeTab.id}
        className={css.item}
        variant={variant}
        key={item.id}
      >
        {item.label}
      </TabItem>
    ))
  }, [
    tabsConfig,
    activeTab,
    onTabClick,
    variant
  ])
  
  if (!tabsConfig) return null
  
  return (
    <ul
      className={classnames(css.list, className, {
        [css.listLight]: variant === TabVariants.LIGHT,
        [css.listButtons]: variant === TabVariants.BUTTONS,
      })}
    >
      {items}
    </ul>
  )
}

export default memo(Tabs)