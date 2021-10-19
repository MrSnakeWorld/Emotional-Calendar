import classNames from 'classnames';
import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { clearAllEmotions, closeModal } from '../../Redux/Actions';
import classes from './ModalMenu.module.css'

const mapStateToProps = (state: any) => ({ ...state.modal })
function ModalMenu({ id, contentId, children, ...props }: any) {
  const dispatch = useDispatch()
  console.log(props)
  return (
    <div id='modal_id' className={props.modalMenu.active ? classNames(classes.modal, classes._active) :  classes.modal} onClick={() => {
      document.getElementById('modal_id')?.classList.remove(classes._active);
      document.getElementById('modal_content_id')?.classList.remove(classes._active);
      dispatch(closeModal())
      dispatch(clearAllEmotions())
    }}>
      <div id='modal_content_id' className={props.modalMenu.active ? `${classes.modal_content} ${classes._active}` : classes.modal_content} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(ModalMenu)