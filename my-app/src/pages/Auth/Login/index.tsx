import { Button, Form, Input, RouterLink, Typography } from "@shared";
import { PageSection } from "../../../layouts/PageSection";
import { PATH } from "@router";
import loginStyles from "./styles.module.css";
export function Login() {
  return (
    <PageSection title="Login">
      <div className="form_background">
        <Form onSubmit={() => console.log("teste")}>
          <Input
            width="100%"
            label="Email"
            type="email"
            name="email"
            placeholder="Digite seu email"
          />

          <Input
            width="100%"
            label="Senha"
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />

          <Button
            type="submit"
            radius="medium"
            width="100%"
            text={<Typography size="medium" text="Login" />}
          />
        </Form>
        <div className={`${loginStyles.register_container} flex_align_center`}>
          <Typography size="small" text="Não tem uma conta?" />
          <RouterLink href={PATH.REGISTER}>
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
