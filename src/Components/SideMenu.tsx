import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { closeMenu } from '../Redux/Actions';
import '../Styles/css/ModalMenu.css'

const mapStateToProps = (state: any) => ({ ...state.modal })
function ModalMenu({ id, contentId, children, ...props }: any) {
  const dispatch = useDispatch()

  return (
    <menu>
      <div id='menu_id' className={props.sideMenu.active ? 'menu _active' : 'menu'} onClick={() => {
        document.getElementById('menu_id')?.classList.remove('_active');
        document.getElementById('menu_content_id')?.classList.remove('_active');
        dispatch(closeMenu())
      }}>
        <div id='menu_content_id' className={props.sideMenu.active ? 'menu_content _active' : 'menu_content'} onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </menu>
  )
}

export default connect(mapStateToProps)(ModalMenu)