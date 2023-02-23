import avatar from "../../assets/img/avatar.png"
import { AboutMeAvatar, AboutMeContainer, AboutMeContent, AboutMeDescription, AvatarContent, GetInTouchButton } from "./styles"
import {WhatsappLogo} from 'phosphor-react'

export function AboutMe() {
  return (
    <AboutMeContainer>
        <AboutMeContent>
            <AboutMeAvatar src={avatar} alt="" />
            <AboutMeDescription>
            <h2>SOBRE MIM</h2>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at dolor dignissimos fugiat et ipsa ad magnam consequatur cupiditate, aliquam cumque in nihil minima iste voluptas deserunt obcaecati vel quod! </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at dolor dignissimos fugiat et ipsa ad magnam consequatur cupiditate. </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at dolor dignissimos fugiat et ipsa ad magnam consequatur cupiditate, aliquam cumque in nihil minima iste voluptas deserunt. </p>
            </div>
            <GetInTouchButton><WhatsappLogo size={32} color="#fff" />Entrar em contato agora</GetInTouchButton>
          </AboutMeDescription>

        </AboutMeContent>
    </AboutMeContainer>
  )
}