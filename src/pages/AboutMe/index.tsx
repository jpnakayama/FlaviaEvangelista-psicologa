import { AboutMeContainer, AboutMeContent, AboutMeDescription } from "./styles";
import avatarImg from "../../assets/img/avatar.png"
import { TalkToMeButton } from "../../components/Buttons";

export function AboutMe() {
  return (
    <AboutMeContainer>
        <AboutMeContent>
          <img src={avatarImg} alt="" />
          <AboutMeDescription>
            <p>Olá! Meu nome é Flávia Evangelista.</p>  
            <p> Tenho formação em psicoterapia pela Universidade Federal de São Carlos e atuo como psicóloga clínica desde 2012, atualmente atendendo <strong>adolescentes, adultos e casais</strong>. Obtive o título de psicóloga clínica em 2020, após concluir pós-graduação na área de Psicanálise  intervenção nas instituições no Centro de Estudos e Assistência à Saúde de Campinas / SP.</p>              
            <p> Além do atendimento clínico também tenho experiência na área social, especialmente com <strong>orientação de famílias e adolescentes</strong>, tanto em instituições sociais, quanto no setor público. É uma prática diversa e muito rica do ponto de vista da variedade de experiências e contatos que enriquecem a minha experiência profissional e qualificam o olhar ao outro.</p>
            <strong>Tem alguma dúvida, ou gostaria de mais informações?</strong>
            <TalkToMeButton />
          </AboutMeDescription>
        </AboutMeContent>
    </AboutMeContainer>
  )
}