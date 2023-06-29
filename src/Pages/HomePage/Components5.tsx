import React from 'react'
import styled from 'styled-components'

const Components5 = () => {
  return (
    <div>
      <Container>
        <Main>
<BigText>
Welcome to the future of
meaningful, sustainable work
</BigText>
<SmallText>
We believe that the sum is greater than our parts – our impact can be seen globally. We specialize in helping our highly-skilled, global technology talent community in emerging markets, connect with hundreds of leading companies
</SmallText>
        </Main>
      </Container>
    </div>
  )
}

export default Components5


const SmallText=styled.div`
text-align: center;
font-size:18px
`
const BigText=styled.div`
font-size: 40px;
/* background-color: blue; */
width: 550px;
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