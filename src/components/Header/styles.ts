import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";
import { MenuProps } from ".";

export const HeaderContainer = styled.header`
  background-color: white;
  width: 100%;
  margin: 0 auto;
  padding: 0 3rem;
  background-color: ${props => props.theme["bg-secondary-color"]};
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

    padding: 1rem 0;

    @media (max-width: 768px) {
      display: block;
    }
  }
  `

export const NavMenu = styled.div<MenuProps>`
  all: unset; 
  display: flex;
  align-items: center;
  
  font-size: 1.2rem;
  cursor: pointer;
  
  
  @media (max-width: 768px) {
    display: ${({show}) => show ? 'flex' : 'none'};
    flex-direction: column;
    gap: 0;
    
    position: absolute;
    left: 0;
    width: 100%;
    
    padding: 1rem 2rem;
    
    background-color: ${props => props.theme["bg-secondary-color"]};
  }
  `

export const LinkItem = styled(NavLink)`
  all: unset; 
  color: rgba(0,0,0,0.5);
  padding: 2rem 3rem;

  &.active {
    font-weight: 700;
    color: rgba(0,0,0,1);
  }

  :hover {
      border-bottom: 3px solid black;
      color: rgba(0,0,0,1);
      padding-bottom: 29px;
    }

  @media (max-width: 768px) {
    :hover {
      border: none;
      padding-bottom: 2rem;
    }
  }
`

  

