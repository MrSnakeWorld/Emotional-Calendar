import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { closeModal } from '../Redux/Actions';
import '../Styles/css/ModalMenu.css'

const mapStateToProps = (state: any) => ({ ...state.modal })
function ModalMenu({ id, contentId, children, ...props }: any) {
  const dispatch = useDispatch()

  return (
    <div id='modal_id' className={props.modalMenu.active ? 'modal _active' : 'modal'} onClick={() => {
      document.getElementById('modal_id')?.classList.remove('_active');
      document.getElementById('modal_content_id')?.classList.remove('_active');
      dispatch(closeModal())
    }}>
      <div id='modal_content_id' className={props.modalMenu.active ? 'modal_content _active' : 'modal_content'} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(ModalMenu)