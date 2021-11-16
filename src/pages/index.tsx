import React, { ReactElement } from "react"
import { Main, ModalMenu, EmotionContainer, SideMenu, Carousel, Analitics } from "../Components"
import NextImage from "../Components/NextImage/NextImage"
import Registration from "../Components/Registration/Registration"
import image from '../icon1.jpg'

function HomePage(): ReactElement {
  return (
    <div id='app' className='app slider'>
      <ModalMenu>
        <EmotionContainer />
      </ModalMenu>
      <Registration />
      <SideMenu >
        <h1 style={{
          margin: '10px auto 20px',
          width: '130px'
        }}>Профиль</h1>
        <div style={{
          borderRadius: '100%',
          overflow: 'hidden',
        }}>
          <NextImage src={image} />
        </div>
        <p style={{
          margin: '20px auto 0px',
          fontSize: '24px',
          width: '160px'
        }}>Соболев Артем</p>
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
