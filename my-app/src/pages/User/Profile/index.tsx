import { Button, FileUpload, Form, Input, Typography } from "@shared";
import { PageSection } from "../../../layouts/PageSection";
export function Profile() {
  return (
    <PageSection title="Meu Perfil" subtitle="Altere seus dados pessoais">
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
            placeholder="Digite seu nome"
          />

          <Input
            width="100%"
            label="Email"
            type="email"
            name="email"
            placeholder="Digite seu email"
          />

          <Input
            width="100%"
            label="Celular"
            type="tel"
            name="phone"
            placeholder="Digite seu celular"
          />

          <Input
            width="100%"
            label="Senha"
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />

          <Input
            width="100%"
            label="Confirme sua senha"
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua senha"
          />

          <Button
            type="submit"
            radius="medium"
            width="100%"
            text={<Typography size="medium" text="Salvar" />}
          />
        </Form>
      </div>
    </PageSection>
  );
}
