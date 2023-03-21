import styled from '@emotion/styled'

const UBGradHead = styled.h1`
  position: relative;
  padding: 0.25em 0;
  &:after {
    content: '';
    display: block;
    height: 4px;
    background: -webkit-linear-gradient(to right, rgb(230, 90, 90), transparent);
    background: linear-gradient(to right, rgb(230, 90, 90), transparent);
  }
`

export default UBGradHead
