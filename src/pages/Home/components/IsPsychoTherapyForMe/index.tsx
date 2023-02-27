import { DesktopText, ForWhomIsTheTherapy, MobileText, MobileTextContent, TextHeader, TextList, TherapyContent, TherapyText } from "./styles";
import * as Tabs from '@radix-ui/react-tabs';
import mentalHealth from "../../../../assets/img/saudeMental.jpg"

export function IsPsychoTherapyForMe() {
  return (
    <ForWhomIsTheTherapy>
      <h2>Para quem é a psicoterapia?</h2>
      <TherapyContent>
        <img src={mentalHealth} alt="" />
        <DesktopText>
          <TherapyText>Se você sente desinteresse em assuntos e tarefas do cotidiano, desânimo constante e tem dificuldade de manter o foco e a atenção na conclusão de suas atividades a psicoterapia pode te auxiliar.</TherapyText>
          <TherapyText>Alterações no sono, alimentação e humor também são sinais de atenção para o cuidado psicológico. </TherapyText>
          <TherapyText>Estar desconfortável consigo mesmo, com suas características físicas ou capacidades de trabalho e de seu relacionar com as pessoas são igualmente campo de atuação da psicoterapia.</TherapyText>
        </DesktopText>
        <MobileText>
          <Tabs.Root defaultValue="tab1">
            <TextList>
              <TextHeader value="tab1">Item 1</TextHeader>
              <TextHeader value="tab2">Item 2</TextHeader>
              <TextHeader value="tab3">Item 3</TextHeader>
            </TextList>
            <MobileTextContent value="tab1">Se você sente desinteresse em assuntos e tarefas do cotidiano, desânimo constante e tem dificuldade de manter o foco e a atenção na conclusão de suas atividades a psicoterapia pode te auxiliar.</MobileTextContent>
            <MobileTextContent value="tab2">Alterações no sono, alimentação e humor também são sinais de atenção para o cuidado psicológico.</MobileTextContent>
            <MobileTextContent value="tab3">Estar desconfortável consigo mesmo, com suas características físicas ou capacidades de trabalho e de seu relacionar com as pessoas são igualmente campo de atuação da psicoterapia.</MobileTextContent>
          </Tabs.Root>
        </MobileText>
      </TherapyContent>
    </ForWhomIsTheTherapy>
  )
}