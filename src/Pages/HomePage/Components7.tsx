import React from 'react'
import styled from 'styled-components'

const Components7 = () => {
  return (
    <div>
      <Container>
        <Main>
<BigText>
Anytime, anywhere – with Andela,
the future of work is here
</BigText>
<SmallText>
Discover how leading companies have built impactful global teams with Andela
</SmallText>
        </Main>
      </Container>
    </div>
  )
}

export default Components7


const SmallText=styled.div`
text-align: center;
font-size:18px
`
const BigText=styled.div`
font-size: 40px;
/* background-color: blue; */
width: 650px;
text-align: center;
line-height: 1.08;
margin-bottom: 20px;
`
const Main=styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: #273238;
`
const Container=styled.div`
width: 100%;
height: 300px;
/* background-color: red; */
display: flex;
justify-content: center;
align-items: center;
`