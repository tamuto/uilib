import { createRoot } from 'react-dom/client'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
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

import { initIn4UILib } from '~/src'

initIn4UILib({
  mediaQuery: '@media screen and (max-width: 768px)',
  requiredLabel: '(*)',
  labelText: {
    color: 'blue'
  },
  dataTable: {
    borderColor: 'lightblue',
    headerColor: 'pink',
    headerBgColor: 'purple',
    color: 'blue',
    bgColor: 'grey',
    alternativeColor: 'red',
    alternativeBgColor: 'darkgrey'
  },
})

const root = createRoot(document.getElementById('app'))
root.render(
  <>
    <CssBaseline />
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
  </>
)
