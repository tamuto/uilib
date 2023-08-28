import {
  Stack
} from '@mui/material'

import {
  LabelText
} from '~/src'

const LabelTextForm = () => {
  return (
    <Stack>
      <LabelText label='ラベル' text='テキスト内容' />
      <LabelText label='あいうえかきくけこ' text='１２３４５６７８９０' />
      <LabelText label='名前' text='UILib太郎' />
      <LabelText label='電 話 番 号' text='00-0000-0000' />
    </Stack>
  )
}

export default LabelTextForm
