import { Button, FileUpload, Form, Input, Select, Typography } from "@shared";
import { PageSection } from "../../../layouts/PageSection";
export function AddPet() {
  return (
    <PageSection
      title="Cadastre um Pet"
      subtitle="Ele ficará disponível para adoção"
    >
      <div className="form_background">
        <Form onSubmit={() => console.log("teste")}>
          <div>Image Preview</div>
          <FileUpload
            width="100%"
            color="gray"
            radius="medium"
            text={<Typography size="base" text="Upload" />}
          />
          <Input
            width="100%"
            label="Nome"
            type="text"
            name="name"
            placeholder="Nome do pet"
          />

          <Input
            width="100%"
            label="Idade"
            type="number"
            name="age"
            placeholder="Idade do pet"
          />

          <Input
            width="100%"
            label="Peso"
            type="number"
            name="weight"
            placeholder="Peso do pet"
          />
          <Select
            name="color"
            label="Selecione a cor"
            options={["Preto", "Branco", "Marrom", "Cinza", "Caramelo"]}
            width="100%"
          />
          <Button
            type="submit"
            radius="medium"
            width="100%"
            text={<Typography size="medium" text="Cadastrar Pet" />}
          />
        </Form>
      </div>
    </PageSection>
  );
}
