import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { App } from 'containers'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { maybeRegisterHappyPathMocks } from './mocks'

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
  },
})

maybeRegisterHappyPathMocks().then(() =>
  ReactDOM.render(
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  ),
)
