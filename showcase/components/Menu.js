import { Link } from 'react-router-dom'
import {
  Button,
  Stack
} from '@mui/material'

const Menu = () => {
  return (
    <Stack spacing={2}>
      <Button variant='contained' component={Link} to='/unsplash'>Unsplash</Button>
      <Button variant='contained' component={Link} to='/datarow'>DataRow</Button>
      <Button variant='contained' component={Link} to='/form'>Form</Button>
      <Button variant='contained' component={Link} to='/hooked'>React Hook Form</Button>
    </Stack>
  )
}

export default Menu
