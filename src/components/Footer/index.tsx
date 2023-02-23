import { FooterContainer, FooterContent, FooterDisclaimer, FooterElement } from "./styles";
import { InstagramLogo, LinkedinLogo } from 'phosphor-react'

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
          <h4>Telefone: (19) 99847 4750</h4>
          <h4>email: contato@flaviaevangelista.com</h4>
        </FooterElement>
        <FooterElement>
          <h2>Redes Sociais</h2>
          <div>
            <h4><InstagramLogo size={32} color="#050505" /></h4>
            <h4><LinkedinLogo size={32} color="#050505" /></h4>
          </div>
        </FooterElement>
      </FooterContent>
      <FooterDisclaimer>
        <p>Desenvolvido por JP Nakayama</p>
        <p>Copyright © 2023. Todos os Direitos Reservados</p>
      </FooterDisclaimer>  
    </FooterContainer>
  )
}