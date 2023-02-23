import styled from "styled-components";
import {Link} from "react-router-dom";

export const HeaderContainer = styled.header`
  background-color: white;
` 

export const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem 3rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const HeaderTitle = styled.div`
  h1 {
    font-size: 3rem;
  }

  h4 {
    margin-top: -0.5rem;
    margin-left: 0.5rem;
    font-size: 0.8rem;
  }
`

export const HeaderNav = styled.div`
  display: flex;
  gap: 5rem;
  
  cursor: pointer;
 
  `

export const NavLink = styled(Link)`
  text-decoration: none;

  color: #000;
  padding: 1rem 0;
  
  :hover {
    transform: scale(1.13);
    transition: 0.3s;
  }
`

  

