import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { store } from '../Redux/Store'

interface Props {
  children: ReactElement
}

function Layout({ children }: Props): ReactElement {
  return (
    <Provider store={store} >
      {children}
    </Provider>
  )
}

export default Layout
