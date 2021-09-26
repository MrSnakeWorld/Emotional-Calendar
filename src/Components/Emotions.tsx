import React from 'react'
import '../Styles/css/Emotions.css'

function Emotions() {
  return (
    <div className='emotions__container'>
      <h4>Выбор эмоции:</h4>
      <button className='emotions joy' >Радость</button>
      <button className='emotions fear' >Страх</button>
      <button className='emotions sadness' >Грусть</button>
      <button className='emotions anger' >Гнев</button>
      <button className='emotions disgust' >Отвращение</button>
      <button className='emotions interest' >Интерес</button>

      <input className='slider' type="range" />
      <button className='submit'>Подтвердить</button>
    </div>
  )
}

export default Emotions