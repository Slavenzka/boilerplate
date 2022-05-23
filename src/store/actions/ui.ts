import { TOGGLE_MODAL } from 'store/actions/actionTypes'
import { ModalOptionsType } from 'components/organisms/Modal/Modal.spec'

export const toggleModal = (content: JSX.Element | null, options?: ModalOptionsType) => {
  return {
    type: TOGGLE_MODAL,
    payload: {
      content,
      options
    }
  }
}