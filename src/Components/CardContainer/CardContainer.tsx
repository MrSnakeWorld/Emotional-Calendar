import React from 'react'
import JournalCard from '../JournalCard/JournalCard'
import { connect } from 'react-redux'
import classes from './CardContainer.module.css'

const mapStateToProps = (state: any) => ([...state.cards.cards])
function displayTitle(display: any, state: any) {
  let title;
  if (!display) {
    title = <p>Что с вами произошло?</p>
  } else if (display && (!state[state.length - 2].value.header && !state[state.length - 2].value.content)) {
    title = <p>Вы сегодня ничего не записали</p>
  } else {
    title = <p>События за сегодня:</p>
  }
  return (title)
}

function CardContainer({ display, ...props }: any) {

  return (
    <div className={`${classes.card__container} ${classes[display]}`} >
      {displayTitle(display, Object.values(props))}
      {
        Object.values(props).map((elem: any, i: number, props: any) => {
          if (typeof elem !== 'function' && typeof elem !== 'boolean' && typeof elem !== 'string')
            if (elem.isDone && !display) {
              return (
                <JournalCard
                  isDone={true}
                  key={elem.key}
                  header={elem.value.header}
                  content={elem.value.content}
                  emotion1={elem.emotions.length >= 1 ? elem.emotions[0] : false}
                  emotion2={elem.emotions.length === 2 ? elem.emotions[1] : false}
                />
              )
            } else if (!display) {
              return (
                <JournalCard isDone={false} key={elem.key} />
              )
            }

        })

      }
    </div>
  )
}

export default connect(mapStateToProps)(CardContainer)