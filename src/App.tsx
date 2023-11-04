import { ThemeProvider } from 'styled-components'
import './App.css'
import { defaultTheme } from './styles/themes/defaultTheme'
import { GlobalStyle } from './styles/GlobalStyle'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (

      <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
              <Router />
          </BrowserRouter>
          <GlobalStyle />
      </ThemeProvider>

  )
}

export default App
