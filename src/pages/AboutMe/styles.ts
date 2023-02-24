import styled from "styled-components";

export const AboutMeContainer = styled.div`

  margin: 0 auto 3rem;  
  padding: 5rem 2rem;
`

export const AboutMeContent = styled.div`
  background-color: #FFF;
  border-radius: 10px;
  padding: 5rem;
  margin-left: 10rem;
  max-width: 90vw;
  
  
  display: flex;
  align-items: center;
  
  img {
    max-height: 400px;
    margin-left: -15rem;
    margin-right: 3rem;
  }
  `

export const AboutMeDescription = styled.div`
  background-color: ${props => props.theme["bg-secondary-color"]};
  padding: 3rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-size: 1.2rem;
  
  line-height: 2rem;
`


