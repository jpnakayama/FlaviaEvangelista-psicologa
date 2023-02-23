import styled from "styled-components";

export const HomeContainer = styled.main`
  height: 100vh;  
`

export const HomeSection = styled.section`
  height: 50vh;
  
  background: ${props => props.theme["green-900"]};
`

export const SectionCard = styled.div`
  height: 50vh;
  
  background: ${props => props.theme["green-700"]};
`