import React, { useRef } from 'react'
import Emotion from './Emotion'
import '../Styles/css/Emotions.css'
import { connect, useDispatch } from 'react-redux'
import { addEmotion, changeOpacity, clearAllEmotions, clearEmotion, closeModal } from '../Redux/Actions'
import { typeOfEmotions } from '../Constants'
import MiniEmotion from './MiniEmotion'

const mapStateToProps = (state: any, props: any) => ({ ...props, ...state.emotions })
function EmotionContainer(props: any) {
  const dispatch = useDispatch()
  const refValue = useRef<HTMLInputElement>(null)
  let sliderClassName, emotionGroupClassName
  props.current !== 'none' ? sliderClassName = '_active slider' : sliderClassName = 'slider'
  props.current !== 'none' ? emotionGroupClassName = '_activeSlider emotion__group' : emotionGroupClassName = 'emotion__group'
  return (
    <div className='emotion__container'>
      <h4 className='emotion__text'>Выбор эмоции:</h4>
      <div className={emotionGroupClassName}>
        {
          Object.values(props.emotions).map((elem: any, i: number, props: any) => {
            return (
              <Emotion
                position={i}
                text={props[i].displayName}
                name={props[i].type}
                R={props[i].color.redColor}
                G={props[i].color.greenColor}
                B={props[i].color.blueColor}

              />
            )
          })
        }
      </div>

      <br /><input className={sliderClassName} type="range" min='0' max='1' step='0.01' ref={refValue} value={props.currentOpacity} onChange={() => {
        dispatch(changeOpacity({
          opacity: Number(refValue.current?.value),
          currentEmotion: props.current
        }))
      }} /><br />
      <button className='submit' onClick={() => {
        dispatch(closeModal())
        dispatch(clearAllEmotions())
      }} >Подтвердить</button>
      <button className='submit' onClick={() => {
        dispatch(clearEmotion({
          currentEmotion: props.current
        }))
      }}>Очистить</button>


    </div>
  )
}

export default connect(mapStateToProps)(EmotionContainer)
