import { useCallback, useState } from 'react'
import { AxiosResponse } from 'axios'
import { PaginationDataType } from 'api/api.spec'

function usePagination ({
  isPageable,
  pageSize
}: {
  isPageable?: boolean,
  pageSize: number
}) {
  const [paginationData, setPaginationData] = useState<PaginationDataType | null>(null)

  const savePaginationData = useCallback((response: AxiosResponse) => {
    if (!isPageable) return null

    // После рефака /admin/posts/ убрать доп. условие
    const data = response?.data?.result ?? response?.data

    if (data) {
      const {
        content,
        ...pagination
      } = data

      setPaginationData(pagination)
    }
  }, [isPageable])

  const getFinalQueryParams = useCallback((queryParams?: string) => {
    if (!isPageable && !queryParams) return ``
    if (!isPageable && queryParams) return `?${queryParams}`

    if (isPageable && !paginationData && queryParams) return `?${queryParams}&page=1&size=${pageSize}`
    if (isPageable && !paginationData && !queryParams) return `?page=1&size=${pageSize}`

    const {
      number
    } = paginationData as PaginationDataType

    if (!queryParams) {
      return `?page=${number + 2}&size=${pageSize}`
    }

    return `?${queryParams}&page=${number + 2}&size=${pageSize}`
  }, [paginationData, isPageable, pageSize])

  return {
    getFinalQueryParams,
    paginationData,
    savePaginationData,
  }
}

export default usePagination