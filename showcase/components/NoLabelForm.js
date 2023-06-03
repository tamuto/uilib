import { css } from '@emotion/react'
import {
  MenuItem,
  Stack,
  Typography
} from '@mui/material'

import FormField from '../../components/form/FormField'
import Spacer from '../../components/form/Spacer'

const heightCss = css`
`

const borderCss = css`
  border: solid 1px black;
`

const Form = () => {
  return (
    <Stack css={heightCss} spacing={2}>
      <FormField label='text' type='text' nolabel />
      <FormField label='text' type='text' nolabel required />
      <FormField label='number' type='number' nolabel />
      <FormField label='date' type='date' nolabel />
      <FormField label='multiline' type='multiline' rows={3} nolabel error helperText='これはエラーです。' />
      <FormField label='password' type='password' nolabel />
      <FormField label='disabled' type='text' value='disabled' nolabel disabled />
      <FormField label='readonly' type='text' value='readonly' nolabel readonly />
      <FormField label='select' type='select' nolabel>
        <MenuItem value='1'>Test1</MenuItem>
        <MenuItem value='2'>Test2</MenuItem>
        <MenuItem value='3'>Test3</MenuItem>
        <MenuItem value='4'>Test4</MenuItem>
      </FormField>
      <FormField label='select' type='select' nolabel required>
        <MenuItem value='1'>Test1</MenuItem>
        <MenuItem value='2'>Test2</MenuItem>
        <MenuItem value='3'>Test3</MenuItem>
        <MenuItem value='4'>Test4</MenuItem>
      </FormField>
      <FormField label='readonly select' type='select' value='1' nolabel readonly>
        <MenuItem value='1'>Test1</MenuItem>
        <MenuItem value='2'>Test2</MenuItem>
        <MenuItem value='3'>Test3</MenuItem>
        <MenuItem value='4'>Test4</MenuItem>
      </FormField>
      <FormField label='disabled select' type='select' value='2' nolabel disabled>
        <MenuItem value='1'>Test1</MenuItem>
        <MenuItem value='2'>Test2</MenuItem>
        <MenuItem value='3'>Test3</MenuItem>
        <MenuItem value='4'>Test4</MenuItem>
      </FormField>
      <FormField label='switch' type='switch' nolabel />
      <FormField label='switch' type='switch' nolabel required />
      <FormField label='readonly switch' type='switch' nolabel readonly value={true} />
      <FormField label='disabled switch' type='switch' nolabel disabled />
      <Typography>TOP Typography</Typography>
      <Spacer css={borderCss} />
      <Typography>This is Test.</Typography>
    </Stack>
  )
}

export default Form
