import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: white;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 3rem;
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;

  @media (max-width: 768px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      gap: 2rem;
  }
`

export const FooterElement = styled.div`
  div {
    display: flex;
    gap: 1rem
  }

  h4 {
    font-weight: 400;

    display: flex;
    align-items: center;
    gap: 1rem;
    line-height: 1.5rem;
  }
  
  @media (max-width: 768px) {
    h3 {
      font-size: 1rem;
    }
    
    h4 {
      font-size: 0.8rem;
      gap: 0.5rem;
      line-height: 1.2rem;
    }
  }
`

export const FooterDisclaimer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: gray;
  font-size: 0.7rem;

  border-top: 1px solid lightgrey;

  padding: 1.5rem 0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 768px) {
      flex-direction: column;
      gap: 0.5rem;
    }
`