import styled from "styled-components";
import { AccordionContent, AccordionTrigger } from "@radix-ui/react-accordion";

export const FAQContainer = styled.section`
  width: 80vw;
  margin: 5rem auto;
`

export const FAQContent = styled.div`
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

  @media (max-width: 786px) {
      font-size: 1rem;
      padding: 1rem
  }
`

export const AnswerItem = styled(AccordionContent)`
  border: none;
  padding: 2rem;

  font-size: 1.3rem;
  line-height: 2.5rem;

  background-color: ${props => props.theme["bg-primary-color"]};

  @media (max-width: 786px) {
    font-size: 0.8rem;
    padding: 1rem;
    line-height: 1.5rem;
  }
`