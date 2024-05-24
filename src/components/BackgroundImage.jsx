import React from 'react'
import background from "../assets/login.jpg"
import styled from 'styled-components'


function BackgroundImage() {
  return (
    <Background>
        <img src={background} alt="background" />
    </Background>
  )
}

const Background = styled.div`
    height: 100vh;
    width: 100vw;
    img {
        height: 100vh;
        width: 100vw;
    }
`;

export default BackgroundImage