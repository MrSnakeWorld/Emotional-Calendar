import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { chooseEmotion } from '../../Redux/Actions'
import classes from './Emotion.module.css'

const mapStateToProps = (state: any, props: any) => ({ ...props, ...state.emotions, ...state.activeEmotions })
function Emotion({ displayName, type, R = 0, G = 0, B = 0, position, ...props }: any) {
  const dispatch = useDispatch()
  let color, bgcolor

  if (props.emotions[position].active) {
    props.current === type ? color = `rgb(${R}, ${G}, ${B})` : color = `grey`
    bgcolor = `rgba(${R}, ${G}, ${B}, ${props.emotions[position].opacity})`
  } else {
    color = `grey`
    bgcolor = `white`
  }

  return (
    <button className={classes.emotions} style={{ backgroundColor: bgcolor, borderColor: color }} onClick={() => {
      dispatch(chooseEmotion({
        position: position,
        currentEmotion: type,
        currentOpacity: props.emotions[position].opacity
      }))
    }} >
      {displayName}
    </button>
  )
}

export default connect(mapStateToProps)(Emotion)
