import React, { useRef } from 'react'
import { connect, useDispatch } from 'react-redux'
import { addCard, openModal } from '../Redux/Actions'
import MiniEmotion from './MiniEmotion'

const mapStateToProps = (state: any, props: any) => ({ ...props, ...state.cards })
function JournalCard({ isDone, header, content, ...props }: any) {
  function actionAddCard(): any {
    dispatch(addCard({
      header: refHeader.current?.value,
      content: refContent.current?.value
    }))
  }

  const dispatch = useDispatch()
  const refHeader = useRef<HTMLInputElement>(null)
  const refContent = useRef<HTMLTextAreaElement>(null)

  console.log(props.currentEmotions)

  if (isDone) {
    return (
      <div className='card__elem' >
        <h2>{header}</h2>
        <p>{content}</p>
      </div>
    )
  } else {
    return (
      <div className='card__elem' >
        <input className='card__event' type="text" placeholder='Событие' ref={refHeader} /> <br />
        <textarea name="card__thougth" className='card__thougth' cols={30} rows={10} placeholder='Ваши мысли на счет произошедшего' ref={refContent} />
        <br /> <button onClick={actionAddCard} >✓</button> <button onClick={() => { dispatch(openModal()) }}>+</button>
        {
          Object.values(props.currentEmotions).map((elem: any, i: number, props: any) => {
            return (
              <MiniEmotion />
            )  
          })
        }
      </div>
    )
  }
}

export default connect(mapStateToProps)(JournalCard)
