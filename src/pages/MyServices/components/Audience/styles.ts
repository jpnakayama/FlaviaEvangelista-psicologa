import styled from "styled-components";

export const AudienceSectionContainer = styled.section`
  width: 100vw;
  padding: 5rem 0;

  background-color: ${props => props.theme["bg-secondary-color"]};
`

export const AudienceSectionContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  text-align: center;
`

export const AudienceSectionCard = styled.div`
  background-color: #FFF;
  border-radius: 6px;

  margin-top: 3rem;
  padding: 3rem;

  box-shadow: 5px 5px 10px lightgray;

  h3 {
    display: inline-block;
    font-size: 1.7rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #000;
  }
`

export const AudienceSectionCardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  text-align: left;

  p {
    font-size: 1.1rem;
    line-height: 1.7rem;
  }

  img {
    max-height: 200px;
  }
`
