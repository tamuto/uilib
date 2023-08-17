import { FC } from 'react'
import styled from '@emotion/styled'

type SpacerProps = {
}

const Spacer: FC<SpacerProps> = styled('div')`
  flex-grow: 1;
`

export default Spacer
