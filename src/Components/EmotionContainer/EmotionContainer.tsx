import React, { useRef } from 'react'
import Emotion from '../Emotion/Emotion'
import classes from './EmotionContainer.module.css'
import { connect, useDispatch } from 'react-redux'
import { addEmotion, changeOpacity, clearAllEmotions, clearCurrentEmotion, clearEmotion, closeModal } from '../../Redux/Actions'
import classNames from 'classnames'

const mapStateToProps = (state: any, props: any) => ({ ...props, ...state.emotions })
function EmotionContainer(props: any) {
  const dispatch = useDispatch()
  const refValue = useRef<HTMLInputElement>(null)
  return (
    <div className={classes.emotion__container}>
      <h4 className={classes.emotion__text}>Выбор эмоции:</h4>
      <div className={
        props.current !== 'none' ? classNames(classes._activeSlider, classes.emotion__group) : classes.emotion__group
      }>
        {
          Object.values(props.emotions).map((elem: any, i: number, props: any) => {
            return (
              <Emotion
                position={i}
                displayName={props[i].displayName}
                type={props[i].type}
                R={props[i].color.redColor}
                G={props[i].color.greenColor}
                B={props[i].color.blueColor}
                key={props[i].emotionId}
              />
            )
          })
        }
      </div>

      <br /><input className={
        props.current !== 'none' ? classNames(classes._active, classes.slider) : classes.slider
      } type="range" min='0' max='1' step='0.01' ref={refValue} value={props.currentOpacity} onChange={() => {
        dispatch(changeOpacity({
          currentOpacity: Number(refValue.current?.value),
          currentEmotion: props.current
        }))
      }} /><br />
      <div className={classes.block}>
        <button className={classes.submit} onClick={() => {
          if (props.emotions.filter((emotion: any) => emotion.active).length <= 2) {
            dispatch(addEmotion({
              activeEmotions: props.emotions.filter((emotion: any) => emotion.active)
            }))
            dispatch(closeModal())
            dispatch(clearAllEmotions())
          }
        }} >Подтвердить</button>
        <button className={classes.submit} onClick={() => {
          dispatch(clearEmotion({
            currentEmotion: props.current
          }))
        }}>Очистить</button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(EmotionContainer)
