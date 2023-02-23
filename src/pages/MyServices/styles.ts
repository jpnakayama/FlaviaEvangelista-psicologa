import styled from "styled-components";

export const TreatmentContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  border-top: 4px solid ${props => props.theme["green-300"]};
  
  padding: 5rem 2rem;

  text-align: center;
`

export const TreatmentContent = styled.div`
  h2 {
    display: inline-block;

    margin-bottom: 1rem;
    padding-bottom: 0.5rem;

    border-bottom: 3px solid black;
  }

  p {
      line-height: 2rem;
    }
`

export const TreatmentCards = styled.div`
  display: flex;
  gap: 2rem;

  margin-top: 2rem;
`

export const TreatmentElement = styled.div`
  background-color: ${props => props.theme["card-color"]};
  border-radius: 4px;

  padding: 2rem;

  h3 {
    margin-bottom: 1rem;
  }

  :hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`