import React from 'react'
import JournalCard from './JournalCard'
import '../Styles/css/CardContainer.css'
import {connect} from 'react-redux'

const mapStateToProps = (state: any) => ([...state.cards])
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
  console.log('Props', Object.values(props).length)

  return (
    <div className={`card__container ${display}`} >
      {displayTitle(display, Object.values(props))}
      {
        Object.values(props).map((elem: any, i: number, props: any) => {
          if (typeof elem !== 'function' && typeof elem !== 'boolean' && typeof elem !== 'string')
            if (elem.isDone && (!display || (elem.value.header !== '' && elem.value.content !== ''))) {
              return (
                <JournalCard isDone={true} key={elem.key} header={elem.value.header} content={elem.value.content} />
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