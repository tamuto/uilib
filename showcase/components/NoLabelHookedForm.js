import {
  useForm
} from 'react-hook-form'

import {
  Stack,
  MenuItem,
  Button
} from '@mui/material'

import HookFormField from '../../components/form/HookFormField'

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
      <HookFormField type='text' name='text1' label='text' control={control} nolabel />
      <HookFormField type='text' name='text2' label='text' control={control} rules={{ required: 'この値は必須ですよ。' }} nolabel />
      <HookFormField type='number' name='text3' label='number' control={control} nolabel />
      <HookFormField type='date' name='text4' label='date' control={control} nolabel />
      <HookFormField type='multiline' name='text5' label='multiline' control={control} rows={3} nolabel />
      <HookFormField type='password' name='password' label='password' control={control} nolabel />
      <HookFormField type='text' name='text6' label='disabled' control={control} disabled nolabel />
      <HookFormField type='text' name='text7' label='readonly' control={control} readonly nolabel />
      <HookFormField type='select' name='sel1' label='select' control={control} nolabel>
        <MenuItem value='1'>Test1</MenuItem>
        <MenuItem value='2'>Test2</MenuItem>
        <MenuItem value='3'>Test3</MenuItem>
        <MenuItem value='4'>Test4</MenuItem>
      </HookFormField>
      <HookFormField type='select' name='sel2' label='select' control={control} rules={{ required: '必須です。' }} nolabel>
        <MenuItem value='1'>Test1</MenuItem>
        <MenuItem value='2'>Test2</MenuItem>
        <MenuItem value='3'>Test3</MenuItem>
        <MenuItem value='4'>Test4</MenuItem>
      </HookFormField>
      <HookFormField type='select' name='sel3' label='select' control={control} readonly nolabel>
        <MenuItem value='1'>Test1</MenuItem>
        <MenuItem value='2'>Test2</MenuItem>
        <MenuItem value='3'>Test3</MenuItem>
        <MenuItem value='4'>Test4</MenuItem>
      </HookFormField>
      <HookFormField type='select' name='sel4' label='select' control={control} disabled nolabel>
        <MenuItem value='1'>Test1</MenuItem>
        <MenuItem value='2'>Test2</MenuItem>
        <MenuItem value='3'>Test3</MenuItem>
        <MenuItem value='4'>Test4</MenuItem>
      </HookFormField>
      <HookFormField type='switch' name='sw1' label='switch' control={control} nolabel />
      <HookFormField type='switch' name='sw2' label='switch' control={control} rules={{ required: 'required' }} nolabel />
      <HookFormField type='switch' name='sw3' label='readonly switch' control={control} readonly nolabel />
      <HookFormField type='switch' name='sw4' label='disabled switch' control={control} disabled nolabel />

      <Button variant='contained' type='submit'>送信</Button>
    </Stack>
  )
}

export default HookedForm
