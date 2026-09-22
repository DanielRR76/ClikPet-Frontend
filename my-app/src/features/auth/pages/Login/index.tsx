import { PageSection } from "@layouts";
import { Button, Form, Input, Typography, RouterLink } from "@shared";
import { PATH } from "@router";
import loginStyles from "./styles.module.css";
import { useLogin } from "../../hooks/useLogin";
export function LoginPage() {
  const { email, password, errors, handleChange, handleSubmit } = useLogin();
  return (
    <PageSection title="Login">
      <div className="form_background">
        <Form onSubmit={handleSubmit}>
          <Input
            width="100%"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Digite seu email"
            isInvalid={errors.email}
            value={email}
            onChange={handleChange}
          />

          <Input
            width="100%"
            label="Senha"
            type="password"
            name="password"
            placeholder="Digite sua senha"
            autoComplete="current-password"
            isInvalid={errors.password}
            value={password}
            onChange={handleChange}
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
