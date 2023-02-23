import { HeaderContainer, HeaderContent, HeaderNav, HeaderTitle, NavLink } from "./styles";
import { Link } from "react-router-dom"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle>
          <h1>Flávia Evangelista</h1>
          <h4>Psicóloga Clínica</h4>
        </HeaderTitle>
        <HeaderNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/sobremim">Sobre Mim</NavLink>
          <NavLink to="/atendimento">Atendimento</NavLink>
          <NavLink to="/artigos">Artigos</NavLink>
        </HeaderNav>

      </HeaderContent>
    </HeaderContainer>
  )
}