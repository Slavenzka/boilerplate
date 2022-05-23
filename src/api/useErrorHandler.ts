import { AxiosError, AxiosResponse } from 'axios'

function useErrorHandler () {
  function handleFetchError (errorObject: AxiosError) {
    console.log((errorObject.response as AxiosResponse).data)
  }

  return handleFetchError
}

export default useErrorHandler