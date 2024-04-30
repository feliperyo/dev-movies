import styled, { keyframes } from 'styled-components'

const scale = keyframes`
from{
  transform: scale(0);
}
to{
  transform: scale(1);
}
`

export const Body = styled.div`
  overflow-x: hidden;
`

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 50vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
`

export const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 99;

  img {
    width: 400px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
  }

  @media screen and (max-width: 500px) {
    img {
      width: 250px;
    }
  }
`

export const Div = styled.div`
  @media screen and (max-width: 1030px) {
    display: flex;
    justify-content: center;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin-top: -250px;

  @media screen and (max-width: 1030px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 750px;
    margin-top: -400px;
    text-align: center;
  }
`

export const Info = styled.div`
  z-index: 99;
  color: #ffffff;
  padding: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  h2 {
    font-size: 50px;
    font-weight: 700;
  }

  p {
    font-weight: 700;
  }

  @media screen and (max-width: 1030px) {
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 750px;
  }

  @media screen and (max-width: 500px) {
    width: 350px;

    p {
      font-size: 10px;
    }
  }
`

export const ContainerMovies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 20px 0;
  }

  h4 {
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 10px;
  }

  iframe {
    border: none;
  }
`
