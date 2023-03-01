import styled from "styled-components"
import homeBannerBG from "../../../../assets/img/homeBannerBG.svg"

export const BannerContainer = styled.section`
  background-image: url(${homeBannerBG});
  background-position: bottom;
  background-repeat: no-repeat;
`

export const BannerContent = styled.div`  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  max-width: 1024px;
  margin: 0 auto;
  padding: 5rem 0;
  
  border-radius: 20px;

  
  img {
    width: 50%;
    height: 50%;
  }
  
  @media (max-width: 786px) {
    flex-direction: column;
    width: 90vw;
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
      font-size: 1rem;
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