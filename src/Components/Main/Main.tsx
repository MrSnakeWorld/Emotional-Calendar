import React, { Dispatch, useRef } from 'react'
import Calendar from 'react-calendar'
import { useDispatch } from 'react-redux'
import { SwipeEventListener } from 'swipe-event-listener'
import CardContainer from '../CardContainer/CardContainer'
import greetings, { weekDay, day, month, year, hours } from '../../Constants'
import { closeMenu, openMenu, openModal } from '../../Redux/Actions'
import classes from './Main.module.css'
import MiniEmotion from '../MiniEmotion/MiniEmotion'

function Main() {
  const dispatch: Dispatch<any> = useDispatch()
  function setEventMainSwipe() {
    const mainElem = document.querySelector('main')
    if (mainElem !== null) {
      const { swipeArea, updateOptions } = SwipeEventListener({
        swipeArea: mainElem,
      });
      swipeArea.addEventListener('swipeRight', (e: Event) => {
        dispatch(openMenu())
      })
    }
  }
  function setEventMenuSwipe() {
    const menuElem = document.querySelector('menu')
    if (menuElem !== null) {
      const { swipeArea, updateOptions } = SwipeEventListener({
        swipeArea: menuElem,
      });
      swipeArea.addEventListener('swipeLeft', (e: Event) => {
        dispatch(closeMenu())
      })
    }
  }
  setTimeout(setEventMainSwipe, 500)
  setTimeout(setEventMenuSwipe, 500)
  function setTileContent({ view }: any) {
    if (view === 'month') {
      return (
        <MiniEmotion>1</MiniEmotion>
      )
    }
    return (
      null
    )
  }

  return (
    <div className={classes.main}>
      <div className={classes.main__welcome}>
        <p className={classes.main__current_date}>
          Сегодня {weekDay}<br />
          {day} {month} {year}
        </p>
        <p className={classes.main__greetings}> {greetings(hours)} </p>
      </div>

      <Calendar
        className='calendar__body'
        tileContent={setTileContent}
        tileClassName={classes.calendarTile}
      />
      <CardContainer />
    </div>
  )
}

export default (Main)
