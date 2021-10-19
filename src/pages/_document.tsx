import React, { ReactElement } from 'react'
import { Html, Head, NextScript, Main } from 'next/document'

function Document(): ReactElement {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Пока пусто"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document