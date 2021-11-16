import React, { Children, ReactElement } from 'react'
import classes from './MiniEmotion.module.css'

interface Props {
  children: number | string,
  color?: string,
  R?: number,
  G?: number,
  B?: number,
  bright?: string,
  active?: boolean,
  holiday?: boolean,
  opacity?: number,
}

function MiniEmotion({ children, R, G, B, active, opacity, holiday, color, bright }: Props): ReactElement {
  return (
    <div className={classes.container}>
      <div className={classes.block} style={{
        backgroundColor: color ? `${color}` : 
        opacity ? `rgba(${R}, ${G}, ${B}, ${opacity})` : `rgb(${R}, ${G}, ${B})`,
        color: holiday ? 'red' : active ? 'black' : 'grey',
        filter: bright ? `brightness(${bright})` : 'brightness(100%)'
      }}>
        {children}
      </div>
    </div>
  )
}

export default MiniEmotion
