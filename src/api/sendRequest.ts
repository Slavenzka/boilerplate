import { AxiosResponse } from 'axios'

function sendRequest ({
  requestMethod,
  options = {}
}: {
  requestMethod: () => Promise<AxiosResponse>,
  options?: {
    responseAdapter?: <T, U>(data: T) => U
  }
}) {
  const {
    responseAdapter
  } = options

  return requestMethod()
    .then(response => {
      if (responseAdapter) {
        return responseAdapter(response)
      }

      return response
    })
}

export default sendRequest