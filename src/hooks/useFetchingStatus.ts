import { useCallback, useMemo, useState } from 'react'

export interface FetchingStatusType {
  isFetching: boolean;
  isSuccess: boolean;
  fetchError: string | null;
}

function useFetchingStatus () {
  const InitialFetchingStatus = useMemo(() => ({
    isFetching: false,
    isSuccess: false,
    fetchError: null
  }), [])

  const [status, updateStatus] = useState<FetchingStatusType>(InitialFetchingStatus)

  const setFetchingInProgress = useCallback(() => {
    updateStatus({
      isFetching: true,
      isSuccess: false,
      fetchError: null
    })
  }, [])

  const setFetchingSuccess = useCallback(() => {
    updateStatus({
      isFetching: false,
      isSuccess: true,
      fetchError: null
    })
  }, [])

  const setFetchingError = useCallback((error: string) => {
    updateStatus({
      isFetching: false,
      isSuccess: false,
      fetchError: error
    })
  }, [])

  const resetFetchingStatus = useCallback(() => {
    updateStatus(InitialFetchingStatus)
  }, [InitialFetchingStatus])

  return {
    resetFetchingStatus,
    setFetchingInProgress,
    setFetchingSuccess,
    setFetchingError,
    ...status,
  }
}

export default useFetchingStatus