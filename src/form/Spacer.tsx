import { FC } from 'react'
import styled from '@emotion/styled'

type SpacerProps = {
}

export const Spacer: FC<SpacerProps> = styled('div')`
  flex-grow: 1;
`
