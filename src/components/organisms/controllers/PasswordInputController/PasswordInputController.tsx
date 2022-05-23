import { memo, useCallback, useState } from 'react'
import { InputTypes } from 'components/atoms/Input/Input.spec'

interface ChildRenderFunctionType {
  ({
     inputType,
     toggleInputType
   }: {
    inputType: InputTypes,
    toggleInputType: () => void
  }): JSX.Element
}

function PasswordInputController ({
  children
}: {
  children: ChildRenderFunctionType
}) {
  const [inputType, setInputType] = useState(InputTypes.PASSWORD)

  const handleClickButton = useCallback(() => {
    setInputType(prevState => {
      return prevState === InputTypes.TEXT
        ? InputTypes.PASSWORD
        : InputTypes.TEXT
    })
  }, [])

  return children({
    inputType,
    toggleInputType: handleClickButton
  })
}

export default memo(PasswordInputController)