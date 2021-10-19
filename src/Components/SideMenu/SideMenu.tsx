import classNames from 'classnames';
import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { closeMenu } from '../../Redux/Actions';
import classes from './SideMenu.module.css'

const mapStateToProps = (state: any) => ({ ...state.modal })
function ModalMenu({ id, contentId, children, ...props }: any) {
  const dispatch = useDispatch()
  return (
    <menu>
      <div id='menu_id' className={props.sideMenu.active ? classNames(classes.menu, classes._active) : classes.menu} onClick={() => {
        document.getElementById('menu_id')?.classList.remove(classes._active);
        document.getElementById('menu_content_id')?.classList.remove(classes._active);
        dispatch(closeMenu())
      }}>
        <div id='menu_content_id' className={props.sideMenu.active ? classNames(classes.menu_content, classes._active) : classes.menu_content} onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </menu>
  )
}

export default connect(mapStateToProps)(ModalMenu)