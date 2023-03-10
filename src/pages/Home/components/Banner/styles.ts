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
  
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 80vw;
    gap: 1rem;

    img {
      display: none;
    }
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
`

export const BannerNameSection = styled.div`
  display: flex;
  flex-direction: column;

  display: none;

  @media (max-width: 768px) {
    display: block;
    
    div h1 {
      font-size: 1.2rem;
    }
    
    div p {
      font-size: 0.8rem;
    }
  }
`