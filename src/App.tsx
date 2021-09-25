import React from 'react'
import './Styles/css/Calendar.css'
import './Styles/css/App.css'
import './Styles/css/Slider.css'
import Main from './Main'
import Analitics from './Analitics'
import Carousel from './Components/Carousel'
import ModalMenu from './Components/ModalMenu'
import SideMenu from './Components/SideMenu'

function App() {

  return (
    <div id='app' className='app slider'>
      <ModalMenu>
        <h2>Выбор эмоции:</h2>
        <p>Потом это добавлю</p>
      </ModalMenu>
      <SideMenu >
        <h1>Заголовок</h1>
        <p>Текст</p>
      </SideMenu>
      <Carousel show={1} withIndicator>
        <span data-testid='carousel-item-1'>
          <main>
            <Main />
          </main>
        </span>
        <span data-testid='carousel-item-2'>
          <Analitics />
        </span>
      </Carousel>
    </div>
  )
}

export default App