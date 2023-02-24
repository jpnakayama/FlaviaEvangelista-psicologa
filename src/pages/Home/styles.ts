import styled from "styled-components";
import homeSectionBG from "../../assets/img/homeSectionBG.svg"
import homeBannerBG from "../../assets/img/homeBannerBG.svg"
import { AccordionContent, AccordionHeader, AccordionTrigger } from "@radix-ui/react-accordion";

export const HomeContainer = styled.main`

`

export const HomeBanner = styled.section`
  background-color: #FFF;
  background-image: url(${homeBannerBG});
  background-position: bottom;
  background-repeat: no-repeat;
  
  display: flex;
  gap: 20px;
  align-items: center;
  
  width: 80vw;
  margin: 5rem auto;
  padding: 5rem;

  border-radius: 20px;

  div {
    display: flex;
    justify-content: center;
    
  }
  
  img {
    max-width: 600px;
    border-radius: 10px;
  }
`

export const BannerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  h2 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem
  }
`

export const HowItWorksSection = styled.section`
  background-color: ${props => props.theme["bg-secondary-color"]};
  background-image: url(${homeSectionBG});
  background-size: cover;

  padding: 5rem;
  text-align: center;
  color: #fff;

  h2 {
    padding-bottom: 3rem;

    font-size: 3rem;
  }
`

export const SectionCards = styled.div`
  display: flex;
  gap: 5rem;

  width: 80vw;
  margin: 0 auto;

  p {
    background-color: rgba(10,23,55,0.5);
    max-width: 250px;
    line-height: 2rem;

    padding: 3rem 2rem;

    font-size: 1.2rem;    
  }
`

export const FAQSection = styled.section`
  width: 80vw;
  margin: 5rem auto;



  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`

export const QuestionItem = styled(AccordionTrigger)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
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