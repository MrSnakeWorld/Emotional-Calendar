import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { chooseEmotion } from '../Redux/Actions'

const mapStateToProps = (state: any, props: any) => ({ ...props, ...state.emotions })
function Emotion({ text, name, R = 0, G = 0, B = 0, position, ...props }: any) {
  const dispatch = useDispatch()
  let color, bgcolor
  const className = 'emotions ' + name

  if (props.emotions[position].active) {
    props.current === name ? color = `rgb(${R}, ${G}, ${B})` : color = `grey`
    bgcolor = `rgba(${R}, ${G}, ${B}, ${props.emotions[position].opacity})`
  } else {
    color = `grey`
    bgcolor = `white`
  }

  return (
    <button className={className} style={{ backgroundColor: bgcolor, borderColor: color }} onClick={() => {
      dispatch(chooseEmotion({
        currentEmotion: name,
        currentOpacity: `${props.emotions[position].opacity}`
      }))
    }} >
      {text}
    </button>
  )
}

export default connect(mapStateToProps)(Emotion)
