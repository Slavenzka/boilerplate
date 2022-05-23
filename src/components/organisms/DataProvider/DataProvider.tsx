import { memo, useCallback, useEffect, useMemo } from 'react'
import {
  DataProviderProps,
  DataProviderRenderFnArgs,
  RequestBodyType
} from 'components/organisms/DataProvider/DataProvider.spec'
import useDataFetch from 'api/useDataFetch'

function DataProvider<D> ({
  children,
  config
}: DataProviderProps<D>) {
  const {
    data,
    requestMethod,
    responseAdapter,
    errorAdapter,
    queryParams,
    requestBody,
    pageSize,
    isInstantFetch = true,
    isPageable
  } = config

  const {
    sendRequest,
    isFetching,
    isSuccess,
    fetchError,
    paginationData
  } = useDataFetch({
    isPageable,
    pageSize
  })

  const isInitialFetchDone = isFetching || isSuccess || fetchError

  const fetchData = useCallback(({body}: {body?: RequestBodyType} = {}) => {
    if (!isFetching) {
      sendRequest({
        requestMethod,
        options: {
          responseAdapter,
          errorAdapter,
          queryParams,
          requestBody: body ?? requestBody,
        }
      })
    }
  }, [
    sendRequest,
    requestMethod,
    responseAdapter,
    queryParams,
    requestBody,
    isFetching
  ])

  useEffect(() => {
    if (!data && isInstantFetch && !isInitialFetchDone) {
      fetchData()
    }
  }, [data, fetchData, isInstantFetch, isInitialFetchDone])

  return useMemo(() => children({
    data,
    fetchData,
    isFetching,
    isSuccess: isSuccess || Boolean(data),
    fetchError,
    paginationData
  } as DataProviderRenderFnArgs<D>), [
    data,
    fetchData,
    isFetching,
    isSuccess,
    fetchError,
    paginationData
  ])
}

export default memo(DataProvider)