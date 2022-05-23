import { ElementType } from 'react'
import { PropsWithClassName } from 'specs/index.spec'

export enum TabVariants {
  DEFAULT = `DEFAULT`,
  LIGHT = `LIGHT`,
  BUTTONS = `BUTTONS`

}

export interface TabType {
  /*
  * Tab unique identifier
  */
  id: number | string;
  /*
  * Tab label
  */
  label: string | JSX.Element;
  /*
  * Component relevant to actual tab
  */
  Component: ElementType | JSX.Element;
}

export interface TabsProps extends PropsWithClassName {
  /*
  * Active tab data
  */
  activeTab: TabType;
  /*
  * Tab click handler that replaces active tab value with the data of the clicked tab
  */
  onTabClick: (item: TabType) => void;
  /*
  * An array with the data required to render and operate tabs
  */
  tabsConfig: TabType[];
  /*
  * Toggles application of style presets
  */
  variant?: TabVariants;
}