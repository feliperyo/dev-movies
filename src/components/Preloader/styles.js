import styled, { keyframes } from 'styled-components'

const fadeOut = keyframes`
from{
  opacity: 1;
}
to{
  opacity: 0;
}
`

const rotate = keyframes`
to{
  transform: rotate(1turn);
}
`

export const Body = styled.div`
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  animation: ${fadeOut} 2s step-end;
  animation-fill-mode: forwards;
  z-index: 99;
`

export const Loader = styled.div`
  animation: ${rotate} 1s infinite;
  width: 50px;
  height: 50px;
  border: 6px solid #fff;
  border-top-color: #189b20;
  border-radius: 50%;
`
