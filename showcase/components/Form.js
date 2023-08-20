import { css } from '@emotion/react'
import {
  MenuItem,
  Stack,
  Typography
} from '@mui/material'

import {
  FormField,
  Spacer
} from '~/src'

const heightCss = css`
`

const borderCss = css`
  border: solid 1px black;
`

const Form = () => {
  return (
    <Stack css={heightCss} spacing={2}>
      <FormField label='text' type='text' />
      <FormField label='text' type='text' required />
      <FormField label='number' type='number' />
      <FormField label='date' type='date' />
      <FormField label='multiline' type='multiline' rows={3} error helperText='これはエラーです。' />
      <FormField label='password' type='password' />
      <FormField label='disabled' type='text' value='disabled' disabled />
      <FormField label='readonly' type='text' value='readonly' readonly />
      <FormField label='select' type='select'>
        <MenuItem value='1'>Test1</MenuItem>
        <MenuItem value='2'>Test2</MenuItem>
        <MenuItem value='3'>Test3</MenuItem>
        <MenuItem value='4'>Test4</MenuItem>
      </FormField>
      <FormField label='select' type='select' required>
        <MenuItem value='1'>Test1</MenuItem>
        <MenuItem value='2'>Test2</MenuItem>
        <MenuItem value='3'>Test3</MenuItem>
        <MenuItem value='4'>Test4</MenuItem>
      </FormField>
      <FormField label='readonly select' type='select' value='1' readonly>
        <MenuItem value='1'>Test1</MenuItem>
        <MenuItem value='2'>Test2</MenuItem>
        <MenuItem value='3'>Test3</MenuItem>
        <MenuItem value='4'>Test4</MenuItem>
      </FormField>
      <FormField label='disabled select' type='select' value='2' disabled>
        <MenuItem value='1'>Test1</MenuItem>
        <MenuItem value='2'>Test2</MenuItem>
        <MenuItem value='3'>Test3</MenuItem>
        <MenuItem value='4'>Test4</MenuItem>
      </FormField>
      <FormField label='switch' type='switch' />
      <FormField label='switch' type='switch' required />
      <FormField label='readonly switch' type='switch' readonly value={true} />
      <FormField label='disabled switch' type='switch' disabled />
      <Typography>TOP Typography</Typography>
      <Spacer css={borderCss} />
      <Typography>This is Test.</Typography>
    </Stack>
  )
}

export default Form
