import { List } from "phosphor-react";
import { useState } from "react";
import { HeaderContainer, HeaderContent, HeaderMenu, HeaderTitle, LinkItem, NavMenu } from "./styles";

export interface MenuProps {
  show: boolean
}

export function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
  <HeaderContainer>
    <HeaderContent>
      <HeaderTitle>
        <h1>Flávia Evangelista</h1>
        <h4>Psicóloga Clínica | CRP 06/109482</h4>
      </HeaderTitle>
      <HeaderMenu>
        <button onClick={toggleMenu}><List size={32} color="#334839" weight="fill" /></button>
        <NavMenu show={showMenu}>
          <LinkItem to="/">Home</LinkItem>
          <LinkItem to="/sobremim">Sobre Mim</LinkItem>
          <LinkItem to="/atendimento">Atendimento</LinkItem>
          <LinkItem to="/artigos">Artigos</LinkItem>
        </NavMenu>
      </HeaderMenu>
    </HeaderContent>
  </HeaderContainer>
  )
}