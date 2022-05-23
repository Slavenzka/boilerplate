import { AxiosError, AxiosResponse } from 'axios'
import { useCallback, useEffect, useRef } from 'react'
import useFetchingStatus from 'hooks/useFetchingStatus'
import usePagination from 'hooks/usePagination'
import { RequestBodyType, RequestMethodType } from 'api/api.spec'

export interface ResponseAdapterType<U = any> {
  (data: AxiosResponse): U | void
}

interface DataFetchTypes {
  requestMethod: RequestMethodType,
  options?: {
    responseAdapter?: ResponseAdapterType,
    errorAdapter?: (error: AxiosError) => string,
    pageSize?: number,
    queryParams?: string,
    requestBody?: RequestBodyType,
    isPageable?: boolean
  }
}

function useDataFetch ({
  isPageable,
  pageSize = 20
}: {
  isPageable?: boolean,
  pageSize?: number
} = {}) {
  const {
    isFetching,
    isSuccess,
    fetchError,
    setFetchingSuccess,
    setFetchingInProgress,
    setFetchingError
  } = useFetchingStatus()

  const isUnmounted = useRef(false)
  const {
    getFinalQueryParams,
    paginationData,
    savePaginationData
  } = usePagination({
    isPageable,
    pageSize
  })

  const sendRequest = useCallback(({
    requestMethod,
    options = {},
  }: DataFetchTypes) => {
    setFetchingInProgress()

    const {
      responseAdapter,
      errorAdapter,
      queryParams,
      requestBody,
    } = options

    return requestMethod({
      params: getFinalQueryParams(queryParams),
      body: requestBody
    })
      .then(response => {
        if (responseAdapter && !isUnmounted.current) {
          responseAdapter(response)
        }

        if (!isUnmounted.current) {
          savePaginationData(response)
          setFetchingSuccess()
        }

        return response
      })
      .catch(error => {
        if (isUnmounted.current) return null

        if (errorAdapter) {
          setFetchingError(errorAdapter(error))
        } else if (error?.response) {
          const errorData = (error.response as AxiosResponse).data
          const errorStatus = errorData?.status
          const errorType = errorData.error
          const errorDescription = errorData?.['error_description'] ?? errorData.message

          setFetchingError(`${errorStatus ? `Status ${errorStatus}. ` : ``}${errorType ? `${errorType}: ` : ``}${errorDescription || `An error has occurred while fetching data`}`)
        } else {
          setFetchingError(error?.message ?? `An identified error has occurred`)
        }

        return Promise.reject(error)
      })
  }, [
    setFetchingInProgress,
    setFetchingSuccess,
    setFetchingError,
    getFinalQueryParams,
  ])

  useEffect(() => {
    return function () {
      isUnmounted.current = true
    }
  }, [])

  return {
    sendRequest,
    isFetching,
    isSuccess,
    fetchError,
    paginationData
  }
}

export default useDataFetch