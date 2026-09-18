import { PetGrid } from "@shared";
import { PageSection } from "../../layouts";
export function Home() {
  return (
    <PageSection
      title="Adote um Pet"
      subtitle="Veja os detalhes de cada pet e conheça seus tutores."
    >
      <PetGrid />
    </PageSection>
  );
}
