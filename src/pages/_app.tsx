import Head from 'next/head'
import React, { ReactPropTypes, ReactElement } from 'react'
import Layout from './layout'
import '../index.css'

interface Props {
  Component: React.ElementType,
  pageProps: ReactPropTypes
}

function MyApp({ Component, pageProps }: Props): ReactElement {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <title>Календарь Эмоций</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </>
  )
}

export default MyApp
