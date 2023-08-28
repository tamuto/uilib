import { createRoot } from 'react-dom/client'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import {
  ThemeProvider,
  createTheme
} from '@mui/material/styles'
import {
  Container,
  CssBaseline
} from '@mui/material'

import Menu from './components/Menu'
import DataRow from './components/DataRow'
import Form from './components/Form'
import HookedForm from './components/HookedForm'
import NoLabelForm from './components/NoLabelForm'
import NoLabelHookedForm from './components/NoLabelHookedForm'
import LabelTextForm from './components/LabelTextForm'

const theme = createTheme({
  components: {
    In4UILibs: {
      breakpoint: '@media screen and (max-width: 768px)'
    },
    In4FormField: {
      defaultProps: {
        width: '220px'
      }
    },
    In4LabelText: {
      defaultProps: {
        textColor: 'blue'
      }
    },
    In4DataTable: {
      defaultProps: {
        borderColor: 'lightblue',
        headerColor: 'pink',
        headerBgColor: 'purple',
        color: 'blue',
        bgColor: 'grey',
        alternativeColor: 'red',
        alternativeBgColor: 'darkgrey'
      }
    }
  }
})

const root = createRoot(document.getElementById('app'))
root.render(
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Container sx={{ my: 3 }}>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/datarow' element={<DataRow />} />
            <Route path='/form' element={<Form />} />
            <Route path='/hooked' element={<HookedForm />} />
            <Route path='/nlform' element={<NoLabelForm />} />
            <Route path='/nlhooked' element={<NoLabelHookedForm />} />
            <Route path='/labeltext' element={<LabelTextForm />} />
          </Routes>
        </HashRouter>
      </Container>
    </ThemeProvider>
  </>
)
