import { HeaderContainer, HeaderContent, HeaderNav, HeaderTitle } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderNav>
          <h3>Sobre Mim</h3>
          <h3>Atendimento</h3>
          <h3>Artigos</h3>
          <h3>Contato</h3>
        </HeaderNav>
        <HeaderTitle>
          <h1>Flávia Evangelista</h1>
          <h2>Psicóloga Clínica | CRP: XXXXXXXX</h2>
          <h3>Psicoterapia para crianças, adultos e casais</h3>
        </HeaderTitle>

      </HeaderContent>
    </HeaderContainer>
  )
}