import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { chooseEmotion } from '../Redux/Actions'

const mapStateToProps = (state: any, props: any) => ({ ...props, ...state.emotions })
function Emotion({ text, className, R = 0, G = 0, B = 0, ...props }: any) {
  const dispatch = useDispatch()
  let color, bgcolor
  const name = className
  className = 'emotions ' + className

  if (props[`${name}`].active) {
    color = `rgb(${R}, ${G}, ${B})`
    bgcolor = `rgba(${R}, ${G}, ${B}, ${props[`${name}`].opacity})`
  } else {
    color = `grey`
    bgcolor = `white`
  }

  return (
    <button className={className} style={{ backgroundColor: bgcolor, borderColor: color }} onClick={() => {
      dispatch(chooseEmotion(name))
    }} >
      {text}
    </button>
  )
}

export default connect(mapStateToProps)(Emotion)
