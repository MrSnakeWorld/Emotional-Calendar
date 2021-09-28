import React, { useRef } from 'react'
import Emotion from './Emotion'
import '../Styles/css/Emotions.css'
import { connect, useDispatch } from 'react-redux'
import { changeOpacity } from '../Redux/Actions'

const mapStateToProps = (state: any, props: any) => ({ ...props, ...state.emotions })
function EmotionContainer(props: any) {
  const dispatch = useDispatch()
  const refValue = useRef<HTMLInputElement>(null)
  return (
    <div className='emotion__container'>
      <h4 className='emotion__text'>Выбор эмоции:</h4>
      <div className='emotion__group'>
        <Emotion text='Радость' className='joy' R='255' G='255' />
        <Emotion text='Печаль' className='sadness' G='255' />
        <Emotion text='Пустота' className='void' />
        <Emotion text='Пустота' className='void' />
        <Emotion text='Пустота' className='void' />
        <Emotion text='Пустота' className='void' />
      </div>

      <br /><input className='slider' type="range" min='0' max='100' ref={refValue} value={props.value} onChange={() => {
        try {
          dispatch(changeOpacity(Number(refValue.current?.value)))
        } catch (error) {
          console.log(error)
        }
      }} /><br />
      <button className='submit'>Подтвердить</button>
    </div>
  )
}

export default connect(mapStateToProps)(EmotionContainer)
