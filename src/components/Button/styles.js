import styled, { css } from 'styled-components'

const buttonStyles = css`
  border: 2px solid #ffffff;
  background-color: transparent;
  color: #ffffff;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    background-color: #ffffff;
    color: #ff0000;
  }

  &:active {
    opacity: 0.8;
  }
`

export const ButtonWhite = styled.button`
  ${buttonStyles}
`
export const ButtonRed = styled.button`
  ${buttonStyles}
  background-color: #ff0000;
  border: 3px solid transparent;
  box-shadow: 0px 0px 5px 6px rgb(255 0 0 /30%);

  &:hover {
    box-shadow: 0px 0px 5px 8px rgb(255 0 0 /30%);
    background-color: #ff0000;
    color: #ffffff;
  }
`
