import styled from "styled-components";

export const Background = styled.div`
background-color: rgba(0,0,0,0.6);
height: 100vh;
width: 100vw;
z-index: 999;
position: absolute;
display: flex;
align-items: center;
justify-content: center;
`

export const Container = styled.div`
background-color: rgba(0,0,0,0.90);
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: fixed;
padding: 20px;
max-width: 1200px;
border-radius: 30px;


button{
position: absolute;
top: 5px;
right: 5px;
background-color: #ffffff;
border-radius: 30px;
font-size: 20px;
padding: 0px 5px;
color: red;
border: 1px solid red;
cursor: pointer;
}

iframe{
    border: none;
}
`
