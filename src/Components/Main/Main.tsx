import React, { Dispatch } from 'react'
import Calendar from 'react-calendar'
import { useDispatch } from 'react-redux'
import { SwipeEventListener } from 'swipe-event-listener'
import CardContainer from '../CardContainer/CardContainer'
import greetings, { weekDay, day, month, year, hours, getRequest, url, currentUser } from '../../Constants'
import { closeMenu, openMenu } from '../../Redux/Actions'
import classes from './Main.module.css'
import MiniEmotion from '../MiniEmotionContainer/MiniEmotion/MiniEmotion'
import MiniEmotionContainer from '../MiniEmotionContainer/MiniEmotionContainer'



function Main() {

  const dispatch: Dispatch<any> = useDispatch()
  const headers = {
    TempUsername: currentUser,
    monthNumInYear: month,
    year: year
  }
  // let data
  // getRequest(url + Calendar, headers).then((data) => {
  //   data = data
  // })
  // console.log(data)


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
        tileClassName={classes.calendarTile}
        maxDetail={'month'}
        minDetail={'year'}
      />
      <CardContainer />
      <MiniEmotionContainer/> 
    </div>
  )
}

export default (Main)
