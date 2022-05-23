import { FetchingStatusType } from 'hooks/useFetchingStatus'
import { ReactElement } from 'react'
import { AxiosError } from 'axios'
import { ResponseAdapterType } from 'api/useDataFetch'
import { PaginationDataType, RequestMethodType } from 'api/api.spec'

export interface RequestBodyType {
  [key: string]: string | number | null
}

export interface FetchDataType {
  ({body}?: {body?: RequestBodyType}): void
}

export interface DataProviderRenderFnArgs<D> extends  FetchingStatusType{
  data: D,
  fetchData: FetchDataType,
  paginationData: PaginationDataType | null
}

export type DataProviderRenderFunctionType<D> = ({
  data,
  fetchData,
  isFetching,
  isSuccess,
  fetchError,
  paginationData
}: DataProviderRenderFnArgs<D>) => ReactElement | null

export interface DataProviderConfigType<D> {
  requestMethod: RequestMethodType;
  responseAdapter: ResponseAdapterType;
  errorAdapter?: (error: AxiosError) => string;
  isInstantFetch?: boolean;
  data: D;
  queryParams?: string;
  requestBody?: RequestBodyType;
  pageSize?: number;
  isPageable?: boolean;
}

export interface DataProviderProps<D> {
  children: DataProviderRenderFunctionType<D>,
  config: DataProviderConfigType<D>,
}