import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addCard, openModal } from '../Redux/Actions'

function JournalCard({ isDone, header, content }: any) {
  function actionAddCard(): any {
    dispatch(addCard({
      header: refHeader.current?.value,
      content: refContent.current?.value
    }))
  }

  const dispatch = useDispatch()
  const refHeader = useRef<HTMLInputElement>(null)
  const refContent = useRef<HTMLTextAreaElement>(null)

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
      </div>
    )
  }
}

export default JournalCard
