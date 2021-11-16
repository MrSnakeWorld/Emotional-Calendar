import React, { useRef } from 'react'
import { connect, useDispatch } from 'react-redux'
import { addCard, clearCurrentEmotion, openModal } from '../../Redux/Actions'
import classes from './JournalCard.module.css'

const mapStateToProps = (state: any, props: any) => ({ ...props, ...state.cards })
function JournalCard({ isDone, header, content, emotion1, emotion2, ...props }: any) {
  function btnAddCard(): any {
    dispatch(addCard({
      header: refHeader.current?.value,
      content: refContent.current?.value
    }))
    dispatch(clearCurrentEmotion())
    if (refHeader.current) refHeader.current.value = ''
    if (refContent.current) refContent.current.value = ''
  }
  function btnChooseEmote(): any {
    dispatch(openModal())
  }

  const returnColors = (R: number[], G: number[], B: number[], opacities: number[]) => {
    return [
      `rgba(${R[0]}, ${G[0]}, ${B[0]}, ${opacities[0]})`,
      `rgba(${R[1]}, ${G[1]}, ${B[1]}, ${opacities[1]})`
    ]
  }

  const dispatch = useDispatch()
  const refHeader = useRef<HTMLInputElement>(null)
  const refContent = useRef<HTMLTextAreaElement>(null)

  if (isDone) {
    const colors = returnColors(
      [emotion1.color.redColor, emotion2.color.redColor],
      [emotion1.color.greenColor, emotion2.color.greenColor],
      [emotion1.color.blueColor, emotion2.color.blueColor],
      [emotion1.opacity, emotion2.opacity]
    )

    return (
      <div className={classes.card__elem} style={{
        background: `linear-gradient(to top right, ${colors[0]}, ${colors[1]} )`
      }}>
        <h3 className={classes.card__header}>{header}</h3>
        <p className={classes.card__content}>{content}</p>
      </div>
    )
  } else {
    const colors = returnColors(
      [props.currentEmotions[0].color.redColor, props.currentEmotions[1].color.redColor],
      [props.currentEmotions[0].color.greenColor, props.currentEmotions[1].color.greenColor],
      [props.currentEmotions[0].color.blueColor, props.currentEmotions[1].color.blueColor],
      [props.currentEmotions[0].opacity, props.currentEmotions[1].opacity]
    )

    return (
      <div className={classes.card__elem} style={{
        background: `linear-gradient(to top right, ${colors[0]}, ${colors[1]})`
      }}>
        <input className={classes.card__event} type="text" placeholder='Событие' ref={refHeader} /> <br />
        <textarea name="card__thougth" className={classes.card__thougth} cols={30} rows={10} placeholder='Ваши мысли на счет произошедшего' ref={refContent} /><br />
        <div className={classes.block}>
          <div className={classes.buttons}>
            <button onClick={btnAddCard} >✓</button>
            <button onClick={btnChooseEmote}>+</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(JournalCard)
