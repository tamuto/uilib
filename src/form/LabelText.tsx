import { FC } from 'react'
import styled from '@emotion/styled'
import {
  mediaQuery,
  formFieldWidth,
  labelTextColor
} from '../utils/mediaQuery'

export type LabelTextProps = {
  label: string,
  text: string
}

const StyledLabelText = styled.div`
display: flex;
align-items: center;
margin-bottom: 5px;

& .label {
  display: inline-block;
  width: ${formFieldWidth};
  text-align: right;
  margin-right: 16px;
  color: ${labelTextColor};
}
& .label::after {
  content: ':';
  margin-left: 8px;
}

${({ theme }) => mediaQuery(theme)} {
  display: block;
  & .label {
    display: block;
    width: auto;
    text-align: left;
    margin-right: 0;
    font-size: 0.3em;
  }
  & .label::before {
    content: '(';
    margin-right: 2px;
  }
  & .label::after {
    content: ')';
    margin-left: 2px;
  }
`

export const LabelText: FC<LabelTextProps> = ({ label, text }) => {
  return (
    <StyledLabelText>
      <span className='label'>{label}</span>
      <span className='text'>{text}</span>
    </StyledLabelText>
  )
}
