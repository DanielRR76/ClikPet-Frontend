import { Button, Form, Input, Typography, RouterLink } from "@shared";
import { PageSection } from "@layouts";
import { PATH } from "@router";
import registerStyles from "./styles.module.css";
import { useRegister } from "../../hooks/useRegister";

export function RegisterPage() {
  const {
    name,
    phone,
    email,
    password,
    confirmPassword,
    errors,
    handleChange,
    handleSubmit,
  } = useRegister();
  return (
    <PageSection title="Cadastro">
      <div className="form_background">
        <Form onSubmit={handleSubmit}>
          <Input
            width="100%"
            label="Nome"
            type="text"
            name="name"
            placeholder="Digite seu nome"
            isInvalid={errors.name}
            value={name}
            onChange={handleChange}
          />

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
            label="Celular"
            type="tel"
            name="phone"
            placeholder="Digite seu celular"
            isInvalid={errors.phone}
            value={phone}
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
          <Input
            width="100%"
            label="Confirme sua senha"
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            autoComplete="current-password"
            isInvalid={errors.confirmPassword}
            value={confirmPassword}
            onChange={handleChange}
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
