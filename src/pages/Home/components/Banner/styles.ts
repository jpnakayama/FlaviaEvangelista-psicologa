import styled from "styled-components"
import homeBannerBG from "../../../../assets/img/homeBannerBG.svg"

export const HomeBannerStyled = styled.section`
  background-color: #FFF;
  background-image: url(${homeBannerBG});
  background-position: bottom;
  background-repeat: no-repeat;
  
  display: flex;
  
  width: 80vw;
  margin: 5rem auto;
  padding: 5rem;
  
  border-radius: 20px;
  
  div {
    display: flex;
    justify-content: center;    
  }
  
  img {
    width: 100%;
    height: 100%;
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
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`

export const BannerNameSection = styled.div`
  display: flex;
  flex-direction: column;
`