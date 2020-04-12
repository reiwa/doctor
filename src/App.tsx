import { CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainHome from './home/MainHome'
import { createTheme } from './theme/createTheme'

const App: FunctionComponent = () => {
  const theme = createTheme(false)

  return (
    <StylesProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'}>
              <MainHome />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App
