import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 300px;
    height: auto;
    border-radius: 30px;
  }

  h3 {
    color: #ffffff;
    margin-top: 15px;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    img {
      width: 175px;
      border-radius: 20px;
    }

    h3 {
      font-size: 15px;
    }
  }
`
