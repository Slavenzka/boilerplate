import { memo, useMemo, useState } from 'react'
import { TabType } from 'components/molecules/Tabs/Tabs.spec'

interface ChildrenRenderProps {
  tabsConfig: TabType[];
  activeTab: TabType;
  onTabClick: (tab: TabType) => void;
}

function TabsController ({
  children,
  defaultTabID,
  tabsConfig
}: {
  children: (props: ChildrenRenderProps) => JSX.Element;
  defaultTabID?: number | string;
  tabsConfig: TabType[]
}) {
  const defaultTab = useMemo(() => {
    return defaultTabID
      ? tabsConfig.find(item => item.id === defaultTabID) || tabsConfig[0]
      : tabsConfig[0]
  }, [defaultTabID, tabsConfig])
  
  const [activeTab, setActiveTab] = useState(defaultTab)
  
  return children({
    tabsConfig,
    activeTab,
    onTabClick: setActiveTab
  })
}

export default memo(TabsController)