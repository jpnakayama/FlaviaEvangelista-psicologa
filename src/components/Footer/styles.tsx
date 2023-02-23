import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: white;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 3rem;
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding: 2rem 0;
`

export const FooterElement = styled.div`
  div {
    display: flex;
    gap: 1rem
  }
`

export const FooterDisclaimer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: gray;

  border-top: 1px solid lightgrey;

  padding: 1.5rem 0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem
  }
`