import React, { Children, ReactElement } from 'react'
import classes from './MiniEmotion.module.css'

interface Props {
  children: string
}

function MiniEmotion({ children }: Props): ReactElement {
  return (
    <div className={classes.container}>
      <div className={classes.block}>
        {children}
      </div>
    </div>
  )
}

export default MiniEmotion
