import { SendMessageBtn, TalkToMeBtn, WhatsAppBtn } from "./styles";
import { WhatsappLogo } from "phosphor-react"

export function WhatsAppButton() {
  return(
    <WhatsAppBtn><WhatsappLogo size={28} color="#FFF" weight="thin" /><a href="https://api.whatsapp.com/send?phone=5519997902311&text=Olá! Gostaria de mais informações sobre o seu atendimento. Muito obrigado." target="_blank">Entre em contato</a></WhatsAppBtn>
  )
}

export function SendMessageButton() {
  return(
    <SendMessageBtn><WhatsappLogo size={50} color="#FFF" weight="light" /><a href="https://api.whatsapp.com/send?phone=5519997902311&text=Olá! Gostaria de mais informações sobre o seu atendimento. Muito obrigado." target="_blank">Agendar consulta</a></SendMessageBtn>
  )
}

export function TalkToMeButton() {
  return(
    <TalkToMeBtn><a href="https://api.whatsapp.com/send?phone=5519997902311&text=Olá! Gostaria de mais informações sobre o seu atendimento. Muito obrigado." target="_blank">Clique para falar comigo</a></TalkToMeBtn>
  )
}