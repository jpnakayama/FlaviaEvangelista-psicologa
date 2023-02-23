import { TreatmentCards, TreatmentContainer, TreatmentContent, TreatmentElement } from "./styles";

export function MyServices() {
  return (
    <TreatmentContainer>
      <TreatmentContent>
        <div>
          <h2>ATENDIMENTO</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at dolor dignissimos fugiat et ipsa ad magnam consequatur cupiditate, aliquam cumque in nihil minima iste voluptas deserunt</p>
        </div>
        <TreatmentCards>
          <TreatmentElement>
            <h3>Adolescentes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at dolor dignissimos fugiat et ipsa ad magnam consequatur cupiditate, aliquam cumque in nihil minima iste voluptas deserunt</p>
          </TreatmentElement>
          <TreatmentElement>
            <h3>Adultos</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at dolor dignissimos fugiat et ipsa ad magnam consequatur cupiditate, aliquam cumque in nihil minima iste voluptas deserunt</p>
          </TreatmentElement>
          <TreatmentElement>
            <h3>Casais</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at dolor dignissimos fugiat et ipsa ad magnam consequatur cupiditate, aliquam cumque in nihil minima iste voluptas deserunt</p>
          </TreatmentElement>
        </TreatmentCards>

      </TreatmentContent>

    </TreatmentContainer>
  )
}