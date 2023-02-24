import styled from "styled-components";

export const ServicesContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto 3rem;

  padding: 5rem 2rem;

  text-align: center;
`

export const ServicesContent = styled.div`
  p {
      line-height: 2rem;
    }
`

export const ServicesCards = styled.div`
  display: flex;
  gap: 2rem;

  margin-top: 2rem;
`

export const ServicesElement = styled.div`
  background-color: ${props => props.theme["bg-secondary-color"]};
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