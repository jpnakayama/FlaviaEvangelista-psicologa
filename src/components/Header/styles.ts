import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['green-300']};
  padding: 2rem 0rem 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme['green-700']};
` 

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2.5rem;

  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export const HeaderTitle = styled.div`
  h1 {
    font-family: 'Sacramento', cursive;
    font-size: 3rem;
  }

  p {
    margin-top: -0.5rem;
  }
`

export const HeaderNav = styled.div`
  display: flex;
  gap: 3rem;

  cursor: pointer;

  h3 {
    padding: 1rem 0;
    
    :hover {
      border-bottom: 2px solid ${props => props.theme["gold-300"]};
    }
  }
  

`

