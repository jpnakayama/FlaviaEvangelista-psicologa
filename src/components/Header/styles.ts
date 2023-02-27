import styled from "styled-components";
import {Link} from "react-router-dom";
import { MenuProps } from ".";

export const HeaderContainer = styled.header`
  background-color: white;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 3rem;
` 

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderTitle = styled.div`
  h1 {
    font-size: 2.5rem;
  }

  h4 {
    margin-top: -0.2rem;
    margin-left: 0.1rem;
    font-weight: 400;
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
      display: none;
    }

`

export const HeaderMenu = styled.div`
  button {
    all: unset;

    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  }
  `

export const NavMenu = styled.ul<MenuProps>`
  display: flex;
  align-items: center;
  gap: 3rem;

  cursor: pointer;

  @media (max-width: 768px) {
    display: ${({show}) => show ? 'flex' : 'none'};
    flex-direction: column;
    gap: 0;

    position: absolute;
    left: 0;
    width: fit-content;

    padding: 1rem 2rem;

    background-color: ${props => props.theme["bg-secondary-color"]};
  }
`

export const NavLink = styled(Link)`
  all: unset;

  color: #000;
  padding: 1rem 0;
  
  :hover {
    transform: scale(1.13);
    transition: 0.3s;
  } 
`

  

