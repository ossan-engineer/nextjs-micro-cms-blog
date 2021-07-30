import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import axios from 'axios'

import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import {
  ThemeProvider as MaterialUIThemeProvider,
  StylesProvider
} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import useHello from 'hooks/useHello'
import theme from 'styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { data, loading, error } = useHello()

  console.log(data, loading, error)

  // Remove the server-side injected CSS.(https://material-ui.com/guides/server-rendering/)
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
    <StylesProvider injectFirst>
      <MaterialUIThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <SWRConfig
            value={{
              fetcher: async (url: string) => {
                const res = await axios.get(url)
                const data = await res.data
                return data
              }
            }}
          >
            <CssBaseline />
            <Component {...pageProps} />
          </SWRConfig>
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>
    </StylesProvider>
  )
}

export default MyApp
