import { HeaderContainer, HeaderContent, HeaderNav, HeaderTitle } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle>
          <h1>Flávia Evangelista</h1>
          <p>Psicóloga Clínica | CRP: XXXXXXXX</p>
        </HeaderTitle>
        <HeaderNav>
          <h3>Sobre Mim</h3>
          <h3>Atendimento</h3>
          <h3>Artigos</h3>
          <h3>Contato</h3>
        </HeaderNav>

      </HeaderContent>
    </HeaderContainer>
  )
}