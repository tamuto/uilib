import {
  useForm
} from 'react-hook-form'

import {
  Stack,
  MenuItem,
  Button
} from '@mui/material'

import {
  HookFormField,
  FormFieldSet
} from '~/src'

const HookedForm = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  const { handleSubmit, control } = useForm({
    defaultValues: {
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: 'disabled value',
      text7: 'readonly value',
      password: '',
      sel1: '',
      sel2: '',
      sel3: '3',
      sel4: '4',
      sw1: false,
      sw2: true,
      sw3: false,
      sw4: true
    }
  })

  return (
    <Stack component='form' spacing={2} noValidate onSubmit={handleSubmit(onSubmit)}>
      <FormFieldSet label='text fields'>
        <HookFormField type='text' name='text1' label='text' control={control} />
        <HookFormField type='text' name='text2' label='text' control={control} rules={{ required: 'この値は必須ですよ。' }} />
        <HookFormField type='number' name='text3' label='number' control={control} />
        <HookFormField type='date' name='text4' label='date' control={control} />
        <HookFormField type='password' name='password' label='password' control={control} />
        <HookFormField type='text' name='text6' label='disabled' control={control} disabled />
        <HookFormField type='text' name='text7' label='readonly' control={control} readonly />
      </FormFieldSet>
      <HookFormField type='multiline' name='text5' label='multiline' control={control} rows={3} />
      <HookFormField type='select' name='sel1' label='select' control={control}>
        <MenuItem value='1'>Test1</MenuItem>
        <MenuItem value='2'>Test2</MenuItem>
        <MenuItem value='3'>Test3</MenuItem>
        <MenuItem value='4'>Test4</MenuItem>
      </HookFormField>
      <HookFormField type='select' name='sel2' label='select' control={control} rules={{ required: '必須です。' }}>
        <MenuItem value='1'>Test1</MenuItem>
        <MenuItem value='2'>Test2</MenuItem>
        <MenuItem value='3'>Test3</MenuItem>
        <MenuItem value='4'>Test4</MenuItem>
      </HookFormField>
      <HookFormField type='select' name='sel3' label='select' control={control} readonly>
        <MenuItem value='1'>Test1</MenuItem>
        <MenuItem value='2'>Test2</MenuItem>
        <MenuItem value='3'>Test3</MenuItem>
        <MenuItem value='4'>Test4</MenuItem>
      </HookFormField>
      <HookFormField type='select' name='sel4' label='select' control={control} disabled>
        <MenuItem value='1'>Test1</MenuItem>
        <MenuItem value='2'>Test2</MenuItem>
        <MenuItem value='3'>Test3</MenuItem>
        <MenuItem value='4'>Test4</MenuItem>
      </HookFormField>
      <HookFormField type='switch' name='sw1' label='switch' control={control} />
      <HookFormField type='switch' name='sw2' label='switch' control={control} rules={{ required: 'required' }} />
      <HookFormField type='switch' name='sw3' label='readonly switch' control={control} readonly />
      <HookFormField type='switch' name='sw4' label='disabled switch' control={control} disabled />

      <Button variant='contained' type='submit'>送信</Button>
    </Stack>
  )
}

export default HookedForm
