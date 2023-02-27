import styled from "styled-components"

export const HowItWorksSection = styled.section`
  background-color: ${props => props.theme["bg-secondary-color"]};

  padding: 5rem;
  text-align: center;
  color: #fff;

  max-width: 100vw;

  h2 {
    padding-bottom: 3rem;
  }
`

export const SectionCards = styled.ul`
  display: flex;
  gap: 5rem;

  max-width: 100vw;
  margin: 0 auto;

  @media (max-width: 786px) {
      flex-direction: row;
      flex-wrap: wrap;
  }
`

export const CardItem = styled.div`
    max-width: 100%;
    line-height: 2rem;
    background-color: rgba(96,153,102,0.5);
    
    padding: 3rem 2rem;
    
    font-size: 1.2rem;
    color: #fff;
    
    li {
      all: unset;
    }

    :hover {
      background-color: rgba(96,153,102,0.7);
      transform: scale(1.02);
      transition: 0.2s;
    }

`
