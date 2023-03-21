import styled from '@emotion/styled'

const Unspalsh = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: ${props => `url(https://source.unsplash.com/random?${props.theme});`} 
  background-size: cover;
`

export default Unspalsh
