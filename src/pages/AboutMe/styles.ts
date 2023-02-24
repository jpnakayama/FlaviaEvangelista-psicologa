import styled from "styled-components";

export const AboutMeContainer = styled.div`
  margin: 0 auto 3rem;  
  padding: 5rem 2rem;
`

export const AboutMeContent = styled.div`
  background-color: ${props => props.theme["bg-secondary-color"]};
  border-radius: 10px;
  padding: 5rem;
  margin: 0 auto;
  max-width: 75vw;
    
  display: flex;
  align-items: center;
  
  img {
    max-height: 800px;
    transform: rotateY(180deg)
  }
  `

export const AboutMeDescription = styled.div`
  background-color: #FFF;
  padding: 3rem;
  min-width: 40vw;
  margin-left: -10rem;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-size: 1.2rem;
  
  line-height: 2rem;
`


