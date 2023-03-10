import styled from "styled-components";

export const ServicesBannerContainer = styled.section`
  padding: 5rem 0;
`

export const ServicesBannerContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 45%;
    height: 45%;
  }

  @media (max-width: 786px) {
    flex-direction: column;
    max-width: 80vw;
    gap: 1rem;

    img {
      display: none;
    }
  }
`

export const ServiceBannerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 786px) {
    h2 {
      font-size: 2rem;
    }
  }
`

export const ServicesBannerCard = styled.div`
  h3 {
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 0.9rem;
    line-height: 1.5rem
  }

  @media (max-width: 786px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`
