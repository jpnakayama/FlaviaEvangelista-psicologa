import { FooterContainer, FooterContent, FooterDisclaimer, FooterElement } from "./styles";
import { InstagramLogo, LinkedinLogo, GithubLogo } from 'phosphor-react'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterElement>
          <h2>Flávia Evangelista</h2>
          <h4>Psicóloga Clínica</h4>
          <h4>CRP 06/109482</h4>
        </FooterElement>
        <FooterElement>
          <h2>Contatos</h2>
          <h4>Telefone: (19) 99790 2311</h4>
          <h4>email: contato@flaviaevangelista.com</h4>
        </FooterElement>
        <FooterElement>
          <h2>Endereço</h2>
          <h4>Rua Antonio Carlos Nogueira, 984</h4>
          <h4>Centro | Cosmópolis - SP</h4>
        </FooterElement>
        <FooterElement>
          <h2>Redes Sociais</h2>
          <div>
            <a href="https://www.instagram.com/flaviapsicologia/"><InstagramLogo size={32} color="#050505" /></a>
            <a href="https://www.linkedin.com/in/fl%C3%A1via-evangelista-9b6a1165/"><LinkedinLogo size={32} color="#050505" /></a>
          </div>
        </FooterElement>
      </FooterContent>
      <FooterDisclaimer>
        <div>
          <p>Desenvolvido por JP Nakayama</p>
          <a href="https://linkedin.com/in/jpnakayama"><LinkedinLogo size={24} color="gray" /></a>
          <a href="https://github.com/jpnakayama"><GithubLogo size={24} color="gray" /></a>
        </div>
        <p>Copyright © 2023. Todos os Direitos Reservados</p>
      </FooterDisclaimer>  
    </FooterContainer>
  )
}