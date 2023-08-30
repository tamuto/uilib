import {
  Stack
} from '@mui/material'
import {
  useForm
} from 'react-hook-form'

import {
  LabelText,
  HookFormField,
  FormFieldSet
} from '~/src'

const LabelTextForm = () => {
  const { control } = useForm({
    defaultValues: {
      test1: '',
      test2: ''
    }
  })

  return (
    <Stack spacing={2}>
      <LabelText label='ラベル' text='テキスト内容' />
      <LabelText label='あいうえかきくけこ' text='１２３４５６７８９０' variant='standard' />
      <LabelText label='メールアドレス' text='****@****.***' variant='compact' />
      <LabelText label='名前' text='UILib太郎' />
      <LabelText label='電 話 番 号' text='00-0000-0000' variant='form' />
      <HookFormField type='text' name='test1' label='テスト１' control={control} />
      <FormFieldSet label='text fields'>
        <HookFormField type='text' name='test2' label='テスト２' control={control} />
      </FormFieldSet>
    </Stack>
  )
}

export default LabelTextForm
