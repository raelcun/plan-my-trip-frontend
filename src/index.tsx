import React from 'react'
import ReactDOM from 'react-dom'
import { App } from 'containers'
import { maybeRegisterHappyPathMocks } from './mocks'
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles'

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
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  ),
)
