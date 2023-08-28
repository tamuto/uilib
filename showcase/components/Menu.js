import { Link } from 'react-router-dom'
import {
  Button,
  Stack
} from '@mui/material'

const Menu = () => {
  return (
    <Stack spacing={2}>
      <Button variant='contained' component={Link} to='/datarow'>DataRow</Button>
      <Button variant='contained' component={Link} to='/form'>Form</Button>
      <Button variant='contained' component={Link} to='/hooked'>React Hook Form</Button>
      <Button variant='contained' component={Link} to='/nlform'>NoLabel Form</Button>
      <Button variant='contained' component={Link} to='/nlhooked'>NoLabel React Hook Form</Button>
      <Button variant='contained' component={Link} to='/labeltext'>Label Text Form</Button>
    </Stack>
  )
}

export default Menu
