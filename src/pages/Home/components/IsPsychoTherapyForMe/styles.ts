import styled from "styled-components";
import { TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

export const TherapyContainer = styled.section`
  background-color: #fff;
  width: 100vw;
  padding: 5rem 0;
`

export const TherapyTitle = styled.h2`
  text-align: center;
  padding-bottom: 3rem;
`

export const TherapyContent = styled.div`
  display: flex;
  align-items: center;

  max-width: 1024px;
  margin: 0 auto;
  text-align: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
  `

export const DesktopText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media (max-width: 786px) {
    display: none;
  }
  `

export const DesktopTextContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  
    img {
      max-height: 20%;
      max-width: 20%;
    }
`

export const TherapyText = styled.p`
  background-color: rgb(157, 192, 139, 0.7);
  font-size: 1rem;
  line-height: 2rem;
  padding: 2rem;
  margin: 1rem;
  border-radius: 10px;

  text-align: justify;
  
  width: 30%;
  
  :hover {
      background-color: rgb(157, 192, 139, 1);
      transform: scale(1.02);
      transition: 0.2s;
    }
`

export const MobileText = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    padding: 1rem 0 0;
    max-width: 80vw;
  }
`

export const TextList = styled(TabsList)`
  flex-shrink: 0;
  display: flex;
  `

export const TextHeader = styled(TabsTrigger)`
  background-color: rgb(157, 192, 139, 0.7);
  padding: 1rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-bottom: 2px solid white;

  color: gray;
  
  :first-child {
    border-top-left-radius: 6px;
    border-right: 2px solid white;
  }
  
  :last-child {
    border-top-right-radius: 6px;
    border-left: 1px solid white;
  }

  &[data-state='active'] {
    background-color: ${props => props.theme["bg-secondary-color"]};
    color: black;
    border-bottom: none;
    transition: background-color 0.2s;
}
`

export const MobileTextContent = styled(TabsContent)`
  flex-grow: 1;
  padding: 2rem;
  line-height: 1.5rem;
  background-color: ${props => props.theme["bg-secondary-color"]};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`