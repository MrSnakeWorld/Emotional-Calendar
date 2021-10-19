import React, { ReactElement } from "react"
import { Main, ModalMenu, EmotionContainer, SideMenu, Carousel, Analitics } from "../Components"

function HomePage(): ReactElement {
  return (
    <div id='app' className='app slider'>
      <ModalMenu>
        <EmotionContainer />
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

export default HomePage
