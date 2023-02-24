import { GetInTouchButton } from "../../styles/global"
import { AboutMeContainer, AboutMeContent, AboutMeDescription } from "./styles"

export function AboutMe() {
  return (
    <AboutMeContainer>
        <AboutMeContent>
            <AboutMeDescription>
            <div>
              <p>Olá! Meu nome é Flávia Evangelista.</p>                
              <p> Tenho formação em psicoterapia pela Universidade Federal de São Carlos e atuo como psicóloga clínica desde 2012, atualmente atendendo adolescentes, adultos e casais. Obtive o título de psicóloga clínica em 2020, após concluir pós-graduação na área de Psicanálise e intervenção nas instituições no Centro de Estudos e Assistência à Saúde de Campinas / SP.</p>               
              <p> Além do atendimento clínico também tenho experiência na área social, especialmente com orientação de famílias e adolescentes, tanto em instituições sociais, quanto no setor público. É uma prática diversa e muito rica do ponto de vista da variedade de experiências e contatos que enriquecem a minha experiência profissional e qualificam o olhar ao outro. Tem alguma dúvida, ou gostaria de mais informações?</p>
            </div>
            <GetInTouchButton>Entre em contato</GetInTouchButton>
          </AboutMeDescription>
        </AboutMeContent>
    </AboutMeContainer>
  )
}