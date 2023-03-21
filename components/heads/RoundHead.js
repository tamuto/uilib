import styled from '@emotion/styled'

const RoundHead = styled.h1`
  position: relative;
  padding: 0.25em 1em;
  border: solid 2px black;
  border-radius: 3px 0 3px 0;
  &:before, &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border: solid 2px black;
    border-radius: 50%;
  }
  &:after {
    top: -12px;
    left: -12px;
  }
  &:before {
    bottom: -12px;
    right: -12px;
  }
`

export default RoundHead
