import { css } from '@emotion/react'
import {
  Stack,
  Typography
} from '@mui/material'

import FormField from '../../components/form/FormField'
import Spacer from '../../components/form/Spacer'

const heightCss = css`
  height: 400px;
`

const borderCss = css`
  border: solid 1px black;
`

const Form = () => {
  return (
    <Stack css={heightCss} spacing={2}>
      <FormField label='text' type='text' />
      <FormField label='password' type='password' />
      <FormField label='disabled' type='text' value='disabled' disabled />
      <FormField label='readonly' type='text' value='readonly' readonly />
      <Typography>TOP Typography</Typography>
      <Spacer css={borderCss} />
      <Typography>This is Test.</Typography>
    </Stack>
  )
}

export default Form
