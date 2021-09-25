import React, { Dispatch, useRef } from 'react'
import Calendar from 'react-calendar'
import { useDispatch } from 'react-redux'
import { SwipeEventListener } from 'swipe-event-listener'
import CardContainer from './Components/CardContainer'
import greetings, { weekDay, day, month, year, hours } from './constants'
import { closeMenu, openMenu, openModal } from './Redux/Actions'

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
  
  return (
    <div className='main'>
      <div className='app__welcome'>
        <p id='app__current_date'>
          Сегодня {weekDay}<br />
          {day} {month} {year}
        </p>
        <p id='app__greetings' > {greetings(hours)} </p>
      </div>

      <Calendar
        className='calendar__body'
        tileContent=''
      />
      <CardContainer />
    </div>
  )
}

export default (Main)
