import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100px;
  z-index: 999;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background-color: ${(props) =>
    props.changeBg ? 'rgba(0, 0, 0, 0.8)' : 'transparent'};
  transition: background-color 0.5s ease-in-out;

  img {
    width: 25%;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`
export const Menu = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
`
export const Li = styled.li`
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  position: relative;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: '';
    width: ${(props) => (props.isActive ? '100%' : 0)};
    height: 2px;
    background-color: #e32833;
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
    transition: 0.5s;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`
