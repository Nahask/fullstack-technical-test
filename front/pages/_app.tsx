import React from 'react'

import '../styles/globals.css'
import { StoresProvider, stores } from 'stores'
import { HeaderComponent } from 'components/header'

function MyApp({ Component, pageProps }) {
  return (
      <StoresProvider value={stores}>
        <HeaderComponent />
        <Component {...pageProps} />
      </StoresProvider>
  )
}

export default MyApp
