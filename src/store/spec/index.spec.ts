import { ModalOptionsType } from 'components/organisms/Modal/Modal.spec'
import { DeviceTypes } from 'specs/enum.spec'

export interface StoreModalSlice {
  content: JSX.Element | null;
  options: ModalOptionsType;
}

export interface StoreUISlice {
  modal: StoreModalSlice;
}

type ElasticConfigItemType = {
  baseSize: number;
  baseWidth: number;
  widthLimit: number;
}

type ElasticConfigType = Record<DeviceTypes, ElasticConfigItemType>

export interface StoreElasticSlice {
  deviceType: DeviceTypes | null;
  curFontSize: number;
  config: ElasticConfigType;
}

export interface RootReducerType {
  ui: StoreUISlice;
  elastic: StoreElasticSlice;
}