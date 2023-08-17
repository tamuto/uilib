import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'

type FormBarProps = {
  children: ReactNode
}

const FormBar: FC<FormBarProps> = styled('form')`
  display: flex;
  gap: 20px 16px;
`

export default FormBar
