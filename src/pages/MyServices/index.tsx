import { Audience } from "./components/Audience";
import { ServicesBanner } from "./components/ServicesBanner";
import { MyServicesContainer } from "./styles";

export function MyServices() {
  return (
    <MyServicesContainer>
      <ServicesBanner />
      <Audience />
    </MyServicesContainer>
  )
}