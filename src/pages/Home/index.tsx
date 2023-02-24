import { AnswerItem, BannerDescription, FAQSection, ForWhomIsTheTherapy, HomeBanner, HomeContainer, HowItWorksSection, QuestionItem, SectionCards, TherapyContent, TherapyText } from "./styles";
import bannerHome from "../../assets/img/bannerHome2.png"
import mentalHealth from "../../assets/img/saudeMental.jpg"
import { CaretCircleRight, CaretDown } from "phosphor-react"
import * as Accordion from '@radix-ui/react-accordion';
import { WhatsAppButton } from "../../components/Buttons";

export function Home() {
  return(
    <HomeContainer>

      <HomeBanner>
          <BannerDescription>
            <h2>Cuide de sua saúde mental e bem estar</h2>
            <p><CaretCircleRight size={28} color="#050505" weight="light" />Psicoterapia individual - adultos e adolescentes</p>
            <p><CaretCircleRight size={28} color="#050505" weight="light" />Psicoterapia para casais</p>
            <p><CaretCircleRight size={28} color="#050505" weight="light" />Atendimentos presenciais e online</p>
            <WhatsAppButton />

          </BannerDescription>
          <img src={bannerHome} alt="" />
      </HomeBanner>

      <HowItWorksSection>
        <h2>Como funciona a psicoterapia?</h2>
        <SectionCards>
          <p>Através de sessões semanais, em horário previamente estabelecido e com duração aproximada de 50 minutos.</p>
          <p>A psicoterapia proporciona um ambiente seguro e acolhedor para falar de si, expor pensamentos, sentimentos e o que mais você sentir necessidade. </p>
          <p>O psicólogo é um profissional preparado para acolher, ouvir e orientar, sem julgamentos, aqueles que o procuram. </p>
          <p>Através do avanço das sessões é fortalecido o vínculo entre psicólogo e paciente e vai se desdobrando o trabalho da psicoterapia.</p>
        </SectionCards>
      </HowItWorksSection>

      <ForWhomIsTheTherapy>
        <h2>Para quem é a psicoterapia?</h2>
        <TherapyContent>
          <TherapyText>Se você sente desinteresse em assuntos e tarefas do cotidiano, desânimo constante e tem dificuldade de manter o foco e a atenção na conclusão de suas atividades a psicoterapia pode te auxiliar.</TherapyText>
          <div>
            <img src={mentalHealth} alt="" />
            <TherapyText>Alterações no sono, alimentação e humor também são sinais de atenção para o cuidado psicológico. </TherapyText>
          </div>
          <TherapyText>Estar desconfortável consigo mesmo, com suas características físicas ou capacidades de trabalho e de seu relacionar com as pessoas são igualmente campo de atuação da psicoterapia.</TherapyText>

        </TherapyContent>
      </ForWhomIsTheTherapy>

      <FAQSection>
        <h2>Perguntas frequentes</h2>
        <Accordion.Root type="single" collapsible>
          <Accordion.Item value="item-1">
            <Accordion.Header>
              <QuestionItem>Asperiores, odio aspernatur! Lorem ipsum dolor sit amet  ad? <CaretDown size={32} weight="light" /></QuestionItem>
            </Accordion.Header>
            <AnswerItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aut soluta voluptatum id asperiores reprehenderit fugit eos ut possimus sapiente repellat ipsum delectus exercitationem, illo sint perferendis excepturi natus est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla veritatis dolor voluptatum deserunt incidunt doloribus culpa nesciunt fugit asperiores. Laborum officia aut debitis. Repudiandae enim deserunt libero dicta magnam?</AnswerItem>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Header>
              <QuestionItem>Asperiores, odio aspernatur! Lorem ipsum dolor sit amet  ad? <CaretDown size={32} weight="light" /> </QuestionItem>
            </Accordion.Header>
            <AnswerItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aut soluta voluptatum id asperiores reprehenderit fugit eos ut possimus sapiente repellat ipsum delectus exercitationem, illo sint perferendis excepturi natus est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla veritatis dolor voluptatum deserunt incidunt doloribus culpa nesciunt fugit asperiores. Laborum officia aut debitis. Repudiandae enim deserunt libero dicta magnam?</AnswerItem>
          </Accordion.Item>
          <Accordion.Item value="item-3">
            <Accordion.Header>
              <QuestionItem>Asperiores, odio aspernatur! Lorem ipsum dolor sit amet  ad? <CaretDown size={32} weight="light" /> </QuestionItem>
            </Accordion.Header>
            <AnswerItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aut soluta voluptatum id asperiores reprehenderit fugit eos ut possimus sapiente repellat ipsum delectus exercitationem, illo sint perferendis excepturi natus est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla veritatis dolor voluptatum deserunt incidunt doloribus culpa nesciunt fugit asperiores. Laborum officia aut debitis. Repudiandae enim deserunt libero dicta magnam?</AnswerItem>
          </Accordion.Item>
          <Accordion.Item value="item-4">
            <Accordion.Header>
              <QuestionItem>Asperiores, odio aspernatur! Lorem ipsum dolor sit amet  ad? <CaretDown size={32} weight="light" /> </QuestionItem>
            </Accordion.Header>
            <AnswerItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aut soluta voluptatum id asperiores reprehenderit fugit eos ut possimus sapiente repellat ipsum delectus exercitationem, illo sint perferendis excepturi natus est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla veritatis dolor voluptatum deserunt incidunt doloribus culpa nesciunt fugit asperiores. Laborum officia aut debitis. Repudiandae enim deserunt libero dicta magnam?</AnswerItem>
          </Accordion.Item>          
        </Accordion.Root>
      </FAQSection>

    </HomeContainer>
  )
}