import { PageSection } from "@layouts";
import { PetGrid } from "../../components";

export function PetsPage() {
  return (
    <PageSection
      title="Adote um Pet"
      subtitle="Veja os detalhes de cada pet e conheça seus tutores."
    >
      <PetGrid />
    </PageSection>
  );
}
