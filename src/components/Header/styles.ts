import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #9090f7;
  opacity: 0.8;
  background-image: repeating-radial-gradient( circle at 0 0, transparent 0, #9090f7 10px ), repeating-linear-gradient( #d5d5d555, #d5d5d5 );
  
  padding: 3rem 0rem 5rem;

  border-bottom-left-radius: 100px;
` 

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

`

export const HeaderNav = styled.div`
  display: flex;
  gap: 10rem;

  
  cursor: pointer;
  
  h3 {
    padding: 1rem 0;
    font-weight: 400;
    
    :hover {
      font-weight: bold;
    }
  }
    
`

  export const HeaderTitle = styled.div`
    margin-top: 2rem;
    text-align: center;
    
    h1 {
      font-family: 'Sacramento', cursive;
      font-size: 5rem;
    }
  `

