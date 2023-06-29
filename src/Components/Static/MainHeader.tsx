import React from 'react'
import styled from 'styled-components'

const MainHeader = () => {
  return (
    <div>
      <Container>
      Andela acquires Qualified.io and Codewars
<span>Learn More</span>
      </Container>
    </div>
  )
}

export default MainHeader

const Container=styled.div`
color: white;
background-color: #132128;
display: flex;
justify-content: center;
align-items: center;
font-weight: 800;
font-size: 20px;
width: 100%;
height: 60px;
position: fixed;
z-index: 2;

span{
    color: white;
    margin: 0 20px;
    font-size: 15px;
}
`