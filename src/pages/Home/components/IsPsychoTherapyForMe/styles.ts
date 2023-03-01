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
  gap: 2rem;
  align-items: flex-start;

  max-width: 80vw;
  margin: 0 auto;
  text-align: center;

  margin: 0 auto;


  img {
    max-height: 40%;
    max-width: 40%;
  }

  @media (max-width: 786px) {
    flex-direction: column;
  }

  img {
    width: 100%;
    height: 100%;
  }
`


export const DesktopText = styled.div`
  display: block;

  @media (max-width: 786px) {
    display: none;
  }
`

export const TherapyText = styled.p`
  background-color: rgb(172, 251, 225, 0.5);
  font-size: 1rem;
  line-height: 2rem;
  padding: 2rem;
  margin: 1rem;
  border-radius: 10px;
  
  width: 100%;
  
  :hover {
      background-color: rgb(172, 251, 225, 0.8);
      transform: scale(1.02);
      transition: 0.2s;
    }
    `

export const MobileText = styled.div`
  display: none;

  @media (max-width: 786px) {
    display: block;
  }
`

export const TextList = styled(TabsList)`
  flex-shrink: 0;
  display: flex;
  border-bottom: 2px solid white;
`

export const TextHeader = styled(TabsTrigger)`
  background-color: ${props => props.theme["bg-home-card-color"]};
  padding: 1rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  :first-child {
    border-top-left-radius: 6px;
    border-right: 2px solid white;
  }
  
  :last-child {
    border-top-right-radius: 6px;
    border-left: 1px solid white;
  }

  [data-state='active'] {
  background-color: black;
}
`

export const MobileTextContent = styled(TabsContent)`
  flex-grow: 1;
  padding: 1rem;
  line-height: 1.5rem;
  background-color: ${props => props.theme["bg-home-card-color"]};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`