import { Button, Form, FileUpload, Input, Typography, Image } from "@shared";
import { PageSection } from "@layouts";
import { useEditUser } from "../../hooks/useEditUser";
export function ProfilePage() {
  const {
    name,
    image,
    phone,
    email,
    password,
    confirmPassword,
    errors,
    handleChange,
    handleSubmit,
  } = useEditUser();
  return (
    <PageSection title="Meu Perfil" subtitle="Altere seus dados pessoais">
      <div className="form_background">
        <Form onSubmit={handleSubmit}>
          {image && (
            <Image
              src={image instanceof File ? URL.createObjectURL(image) : image}
              width="10rem"
              radius="full"
              border="thin"
              aspectRatio={{ width: 1, height: 1 }}
            />
          )}
          <FileUpload
            width="100%"
            color="gray"
            radius="medium"
            text={<Typography size="base" text="Upload" />}
            handleOnChange={handleChange}
          />
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
            isInvalid={errors.email}
            autoComplete="email"
            placeholder="Digite seu email"
            value={email}
            onChange={handleChange}
          />

          <Input
            width="100%"
            label="Celular"
            type="tel"
            name="phone"
            isInvalid={errors.phone}
            placeholder="Digite seu celular"
            value={phone}
            onChange={handleChange}
          />

          <Input
            width="100%"
            label="Senha"
            type="password"
            name="password"
            isInvalid={errors.password}
            placeholder="Digite sua senha"
            autoComplete="current-password"
            value={password}
            onChange={handleChange}
          />
          <Input
            width="100%"
            label="Confirme sua senha"
            type="password"
            name="confirmPassword"
            isInvalid={errors.confirmPassword}
            placeholder="Confirme sua senha"
            autoComplete="current-password"
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
      </div>
    </PageSection>
  );
}
