import styled from "styled-components";

export const ServicesBannerContainer = styled.section`
  width: 100vw;
  padding: 5rem 0;
`

export const ServicesBannerContent = styled.div`
  margin: 0 auto;
  padding: 0 5rem;
  
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
    height: 50%;
  }
`

export const ServiceBannerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ServicesBannerCard = styled.div`
  h3 {
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem
  }
`
