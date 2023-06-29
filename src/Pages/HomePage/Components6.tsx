import React from 'react'
import styled from 'styled-components'
import Props from '../../Components/reUse/Props'
import GlobalButton from '../../Components/reUse/GlobalButton'

const Components6 = () => {
  return (
    <div>
      <Container>
        <Main>
<BoxHolder>
<Props number='100+' text='Countries represented on
6 continents'/>
<Props number='84%' text='Increased income for Andelans'/>
<Props number='96%' text='Successful placements'/>
<Props number='175,000+' text='Technologists represented'/>
<Props number='18+' text='Months Average engagement'/>
</BoxHolder>
<ButtonHolder>
<GlobalButton width='250px' height='60px' title='Apply for Remote Jobs' brad='35px' bd='1px solid #173b3f'/>
<GlobalButton width='200px' height='60px' title='Hire Talent' brad='30px' bg='#56c870'/>
</ButtonHolder>
        </Main>
      </Container>
    </div>
  )
}

export default Components6


const ButtonHolder= styled.div`
margin-bottom: 10px;
display: flex;
justify-content: space-between;
width: 470px;
`
const BoxHolder= styled.div`
flex-wrap: wrap;
width: 100%;
height: 95%;
display: flex;
justify-content: center;
align-items: center;
`
const Main= styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Container= styled.div`
height: 750px;
width: 100%;
/* background-color: red; */
display: flex;
justify-content: center;
align-items: center;
color: #273238;
`