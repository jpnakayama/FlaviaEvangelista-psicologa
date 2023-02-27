import styled from "styled-components";

export const WhatsAppBtn = styled.button`
  background: ${props => props.theme["bg-secondary-color"]};
  color: #FFF;
  padding: 1rem 3rem;
  border: none;
  border-radius: 6px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  width: fit-content;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
    transition: 0.3s;
  }

  a{
    text-decoration: none;
    color: #FFF;
  }
  `

export const SendMessageBtn = styled.button`
  background-color: #3fcf6a;
  color: #FFF;
  padding: 1rem 2rem;
  border: none;

  margin: -3.5rem auto 1rem;

  font-size: 1.5rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  gap: 1rem;

  cursor: pointer;

  a {
    text-decoration: none;
    color: #FFF;
  }

  @media (max-width: 768px) {
      font-size: 1rem;
      padding: 1rem;
    }
`

export const TalkToMeBtn = styled.button`
  background-color: ${props => props.theme["green-700"]};
  color: #FFF;
  padding: 1rem 3rem;
  border: none;
  border-radius: 6px;
  
  font-size: 1.2rem;
  
  width: fit-content;
  cursor: pointer;
  
  :hover {
    background-color: ${props => props.theme["green-900"]};
    transform: scale(1.02);
    transition: 0.3s;
  }
  
  a{
    text-decoration: none;
    color: #FFF;
  }
`