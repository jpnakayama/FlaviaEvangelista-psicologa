import { FooterContainer, FooterContent, FooterDisclaimer, FooterElement } from "./styles";
import { InstagramLogo, LinkedinLogo, GithubLogo, WhatsappLogo } from 'phosphor-react'
import { SendMessageButton } from "components/Buttons";

export function Footer() {
  return (
    <FooterContainer>
      <SendMessageButton />
      <FooterContent>
        <FooterElement>
          <h3>Flávia Evangelista</h3>
          <h4>Psicóloga Clínica</h4>
          <h4>CRP 06/109482</h4>
        </FooterElement>
        <FooterElement>
          <h3>Contatos</h3>
          <h4>Telefone: (19) 99790 2311</h4>
          <h4>email: contato@flaviaevangelista.com</h4>          
        </FooterElement>
        <FooterElement>
          <h3>Endereço</h3>
          <h4>Rua Antonio Carlos Nogueira, 984</h4>
          <h4>Centro | Cosmópolis - SP</h4>
        </FooterElement>
        <FooterElement>
          <h3>Redes Sociais</h3>
          <div>
            <a href="https://www.instagram.com/flaviapsicologia/" target={"_blank"}><InstagramLogo size={32} color="#050505" /></a>
            <a href="https://www.linkedin.com/in/fl%C3%A1via-evangelista-9b6a1165/" target={"_blank"}><LinkedinLogo size={32} color="#050505" /></a>
          </div>
        </FooterElement>
      </FooterContent>
      <FooterDisclaimer>
        <p>Desenvolvido por JP Nakayama</p>
        <div>
          <a href="https://linkedin.com/in/jpnakayama" target={"_blank"}><LinkedinLogo size={18} color="gray" /></a>
          <a href="https://github.com/jpnakayama" target={"_blank"}><GithubLogo size={18} color="gray" /></a>
          <a href="https://api.whatsapp.com/send?phone=5519998474750&text=Olá! Gostaria de mais informações sobre o seu trabalho como desenvolvedor. Muito obrigado." target={"_blank"}><WhatsappLogo size={18} color="gray" /></a>
        </div>
        <p>Copyright © 2023. Todos os Direitos Reservados</p>
      </FooterDisclaimer>  
    </FooterContainer>
  )
}