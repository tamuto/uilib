import { FC } from 'react'
import styled from '@emotion/styled'
import {
  mediaQuery,
  formFieldWidth,
  labelTextColor,
  labelTextVariant
} from '../utils/mediaQuery'

export type LabelTextProps = {
  label: string,
  text: string,
  variant?: 'standard' | 'compact'
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

${mediaQuery} {
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

const CompactLabelText = styled.div`
display: block;
align-items: center;
margin-bottom: 5px;

& .label {
  display: block;
  width: auto;
  text-align: left;
  margin-right: 0;
  font-size: 0.3em;
  color: ${labelTextColor};
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

export const LabelText: FC<LabelTextProps> = ({ label, text, variant }) => {
  if ((variant && variant == 'compact') || labelTextVariant() === 'compact') {
    return (
      <CompactLabelText>
        <span className='label'>{label}</span>
        <span className='text'>{text}</span>
      </CompactLabelText>
    )
  }
  return (
    <StyledLabelText>
      <span className='label'>{label}</span>
      <span className='text'>{text}</span>
    </StyledLabelText>
  )
}
