import styled from "styled-components";
import homeBannerBG from "../../assets/img/homeBannerBG.svg"
import { AccordionContent, AccordionTrigger } from "@radix-ui/react-accordion";

export const HomeContainer = styled.main`
  width: 100%;
  margin: 0 auto 3rem;
`

export const HomeBanner = styled.section`
  background-color: #FFF;
  background-image: url(${homeBannerBG});
  background-position: bottom;
  background-repeat: no-repeat;
  
  display: flex;
  
  width: 75vw;
  margin: 5rem auto;
  padding: 5rem;

  border-radius: 20px;

  div {
    display: flex;
    justify-content: center;    
  }
  
  img {
    max-width: 500px;
    border-radius: 10px;
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

export const SectionCards = styled.div`
  display: flex;
  gap: 5rem;

  max-width: 100vw;
  margin: 0 auto;

  p {
    background-color: rgba(96,153,102,0.5);
    max-width:  18vw;
    line-height: 2rem;

    padding: 3rem 2rem;

    font-size: 1.2rem;
    color: #fff;
    
    :hover {
      background-color: rgba(96,153,102,0.7);
      transform: scale(1.02);
      transition: 0.2s;
    }
  }
`
export const ForWhomIsTheTherapy = styled.section`
  background-color: #fff;

  padding: 5rem;
  text-align: center;
  max-width: 100vw;

  h2 {
    padding-bottom: 3rem;
    color: #000;
  }

  img {
    max-height: 500px;
  }
`

export const TherapyContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 2rem;

  align-items: flex-start;

  p {
    margin-top: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    margin-top: -3rem;
  }
`

export const TherapyText = styled.p`
  background-color: rgba(96,153,102,0.5);
  font-size: 1.3rem;
  line-height: 2rem;
  padding: 3rem;
  border-radius: 10px;

  max-width: 30vw;

  :hover {
      background-color: rgba(96,153,102,0.7);
      transform: scale(1.02);
      transition: 0.2s;
  }
`

export const FAQSection = styled.section`
  width: 80vw;
  margin: 5rem auto;

  h2 {
    margin-bottom: 2rem;
    text-align: center;
  }
`

export const QuestionItem = styled(AccordionTrigger)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  
  border: none;
  padding: 2rem;

  font-size: 2rem;
  font-weight: 700;

  min-width: 100%;

  background-color: ${props => props.theme["bg-primary-color"]};
  border-bottom: 2px solid ${props => props.theme["green-900"]};
`

export const AnswerItem = styled(AccordionContent)`
  border: none;
  padding: 2rem;

  font-size: 1.3rem;
  line-height: 2.5rem;

  background-color: ${props => props.theme["bg-primary-color"]};
`