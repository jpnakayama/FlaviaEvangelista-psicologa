import { SendMessage, WhatsAppBtn } from "./styles";
import { WhatsappLogo} from "phosphor-react"

export function WhatsAppButton() {
  return(
    <WhatsAppBtn><WhatsappLogo size={28} color="#FFF" weight="thin" />Entre em contato</WhatsAppBtn>
  )
}

export function SendMessageButton() {
  return(
    <SendMessage><WhatsappLogo size={50} color="#FFF" weight="light" />Enviar mensagem agora</SendMessage>
  )
}