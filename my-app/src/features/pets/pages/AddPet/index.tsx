import { PageSection } from "@layouts";
import {
  Typography,
  FileUpload,
  Input,
  Select,
  Form,
  Button,
  Carousel,
  Image,
} from "@shared";
import { useAddPet } from "../../hooks/useAddPet";
import {
  MAX_PET_AGE,
  MAX_PET_WEIGHT,
  MIN_PET_AGE,
  MIN_PET_WEIGHT,
  PET_COLORS,
} from "../../constants";
export function AddPetPage() {
  const {
    name,
    age,
    weight,
    color,
    images,
    errors,
    handleChange,
    handleSubmit,
  } = useAddPet();
  return (
    <PageSection
      title="Cadastre um Pet"
      subtitle="Ele ficará disponível para adoção"
    >
      <div className="form_background">
        <Form onSubmit={handleSubmit}>
          {images && images.length > 0 && (
            <Carousel>
              {Array.from(images).map((image, index) => (
                <Image
                  key={index}
                  src={
                    image instanceof File ? URL.createObjectURL(image) : image
                  }
                  width="10rem"
                  radius="small"
                  border="thin"
                  aspectRatio={{ width: 1, height: 1 }}
                />
              ))}
            </Carousel>
          )}
          <FileUpload
            multiple
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
            placeholder="Nome do pet"
            value={name}
            onChange={handleChange}
            isInvalid={errors.name}
          />

          <Input
            width="100%"
            label="Idade"
            type="number"
            name="age"
            placeholder="Idade do pet"
            min={MIN_PET_AGE}
            max={MAX_PET_AGE}
            required
            value={age}
            onChange={handleChange}
          />

          <Input
            width="100%"
            label="Peso"
            type="number"
            name="weight"
            placeholder="Peso do pet"
            min={MIN_PET_WEIGHT}
            max={MAX_PET_WEIGHT}
            required
            value={weight}
            onChange={handleChange}
          />
          <Select
            name="color"
            label="Selecione a cor"
            options={PET_COLORS}
            width="100%"
            value={color}
            onChange={handleChange}
            isInvalid={errors.color}
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
