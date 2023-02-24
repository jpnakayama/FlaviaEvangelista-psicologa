import { AnswerItem, BannerDescription, FAQSection, HomeBanner, HomeContainer, HowItWorksSection, QuestionItem, SectionCards } from "./styles";
import bannerHome from "../../assets/img/bannerHome2.png"
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
        <h2>Como funciona?</h2>
        <SectionCards>
          <p>Através de sessões semanais, em horário previamente estabelecido e com duração aproximada de 50 minutos.</p>
          <p>A psicoterapia proporciona um ambiente seguro e acolhedor para falar de si, expor pensamentos, sentimentos e o que mais você sentir necessidade. </p>
          <p>O psicólogo é um profissional preparado para acolher, ouvir e orientar, sem julgamentos, aqueles que o procuram. </p>
          <p>Através do avanço das sessões é fortalecido o vínculo entre psicólogo e paciente e vai se desdobrando o trabalho da psicoterapia.</p>
        </SectionCards>
      </HowItWorksSection>

      <section>

      </section>

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