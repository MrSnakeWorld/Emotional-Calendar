import React from 'react'
import classNames from 'classnames'
import classes from './Registration.module.css'
import { connect, useDispatch } from 'react-redux'
import { closeReg } from '../../Redux/Actions'

const mapStateToProps = (state: any) => ({ ...state.modal })
function Registration({ id, contentId, children, ...props }: any) {
  const dispatch = useDispatch()
  return (
    <div id='reg_id' className={props.regMenu.active ? classNames(classes.reg, classes._active) : classes.reg} onClick={() => {
      document.getElementById('reg_id')?.classList.remove(classes._active);
      document.getElementById('reg_content_id')?.classList.remove(classes._active);
    }}>
      <div id='reg_content_id' className={props.regMenu.active ? `${classes.reg_content} ${classes._active}` : classes.reg_content} onClick={e => e.stopPropagation()}>
        <h3 className={classes.header}>Авторизация</h3>
        <div className={classes.container}>
          <p className={classes.paragraph}>Логин</p>
          <input type="text" placeholder='Введите логин' />
        </div>
        <div className={classes.container}>
          <p className={classes.paragraph}>Пароль</p>
          <input type="password" placeholder='Введите пароль' /> <br />
        </div>
        <button className={classes.button} onClick={()=> {
          dispatch(closeReg())
        }}>Войти</button>
        <div className={classes.anchors}>
          <a className={classes.anchor} href='https://www.youtube.com/watch?v=bxIuIOVrECI' target='_blank'>Регистрация</a>
          <a className={classes.anchor} href='https://gachilife.ru/' target='_blank'>Забыли пароль?</a>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Registration)
