import { Button, Form, Input, RouterLink, Typography } from "@shared";
import { PageSection } from "../../../layouts/PageSection";
import { PATH } from "@router";
import registerStyles from "./styles.module.css";
export function Register() {
  return (
    <PageSection title="Cadastro">
      <div className="form_background">
        <Form onSubmit={() => console.log("teste")}>
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
        <div className={`${registerStyles.login_container} flex_align_center`}>
          <Typography size="small" text="Tem uma conta?" />
          <RouterLink href={PATH.LOGIN}>
            <Button
              type="button"
              color="gray"
              radius="medium"
              text={<Typography text="Clique aqui" size="small" />}
            />
          </RouterLink>
        </div>
      </div>
    </PageSection>
  );
}
