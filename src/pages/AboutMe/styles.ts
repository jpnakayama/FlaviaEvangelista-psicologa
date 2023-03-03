import styled from "styled-components";

export const AboutMeContainer = styled.div`
  padding: 5rem 0;
`

export const AboutMeContent = styled.div`
  background-color: ${props => props.theme["bg-secondary-color"]};
  border-radius: 10px;
  padding: 5rem;
  margin: 0 auto;
  max-width: 1024px;
    
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
  max-width: 40vw;
  margin-left: -12rem;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-size: 1.1rem;  
  line-height: 1.7rem;
`


