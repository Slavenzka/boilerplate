import { useEffect } from 'react'

function useTextAreaAutoHeight ({
  elementRef,
}: {
  elementRef: HTMLTextAreaElement,
}) {
  useEffect(() => {
    const textarea = elementRef
    
    function handleUpdateInputHeight () {
      textarea.style.height = `auto`
      textarea.style.height = textarea.scrollHeight + 'px'
    }

    if (textarea) {
      handleUpdateInputHeight()
      textarea.addEventListener(`input`, handleUpdateInputHeight)
    }

    return () => {
      if (textarea) {
        textarea.removeEventListener(`input`, handleUpdateInputHeight)
      }
    }
  }, [elementRef])
}

export default useTextAreaAutoHeight
