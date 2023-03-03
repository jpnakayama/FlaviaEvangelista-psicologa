import styled from "styled-components"

export const BannerContainer = styled.section`
  padding: 5rem 0;
`

export const BannerContent = styled.div`  
  max-width: 1024px;
  margin: 0 auto;
    
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  img {
    width: 55%;
    height: 55%;
  }
  
  @media (max-width: 786px) {
    flex-direction: column;
    max-width: 60vw;
    gap: 1rem;
  }
`

export const BannerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 1rem
  }

  @media (max-width: 786px) {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`

export const BannerNameSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 786px) {
    h1 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`