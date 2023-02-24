import styled from "styled-components";

export const WhatsAppBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  padding: 1rem 3rem;
  border: none;
  border-radius: 6px;

  background: ${props => props.theme["bg-secondary-color"]};
  color: #FFF;

  width: fit-content;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`

export const SendMessage = styled.button`
  background-color: #3fcf6a;
  border: none;

  margin: -3.5rem auto 1rem;

  color: #FFF;
  font-size: 1.5rem;
  font-weight: 700;

  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  cursor: pointer;
`