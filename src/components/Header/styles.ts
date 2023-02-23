import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme["green-100"]};
  
  padding: 2.5rem 0rem;

  border-bottom-left-radius: 100px;
` 

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const HeaderTitle = styled.div`
  text-align: center;
  
  h1 {
    font-family: 'Sacramento', cursive;
    font-size: 3rem;
  }
`

export const HeaderNav = styled.div`
  display: flex;
  gap: 5rem;

  
  cursor: pointer;
  
  h3 {
    padding: 1rem 0;   
    
    :hover {
      transform: scale(1.13);
      transition: 0.3s;
    }
  }    
`

  

