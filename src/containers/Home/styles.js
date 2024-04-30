import styled, { keyframes } from 'styled-components'

const scale = keyframes`
from{
    transform: scale(0);
} to{
    transform: scale(1);
}
`

export const Body = styled.body`
  overflow-x: hidden;
`

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 120px;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  max-width: 1500px;

  @media screen and (max-width: 1030px) {
    width: 650px;
    flex-direction: column;
  }

  @media screen and (max-width: 500px) {
    width: 400px;
  }
`

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 60px;
    font-weight: 700;
    color: #ffffff;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1030px) {
    text-align: center;
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 16px;
    }
  }
`
export const Poster = styled.div`
  z-index: 2;

  img {
    width: 400px;
    border-radius: 30px;
    animation: ${scale} 0.5s linear;
    box-shadow: rgb(0 0 0 / 75%) 0px 7px 29px 0px;
  }

  @media screen and (max-width: 1030px) {
    img {
      width: 350px;
    }
  }

  @media screen and (max-width: 500px) {
    img {
      width: 275px;
    }
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;

  @media screen and (max-width: 1030px) {
    width: 100%;
    justify-content: space-around;
    margin-bottom: -200px;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: -125px;
  }
`
