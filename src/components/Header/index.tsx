import { HeaderContainer, HeaderContent, HeaderNav, HeaderTitle } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle>
          <h1>Flávia Evangelista</h1>
          <h4>Psicóloga Clínica | CRP 06/109482</h4>
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