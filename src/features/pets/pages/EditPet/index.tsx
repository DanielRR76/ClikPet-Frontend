import {
  Typography,
  FileUpload,
  Input,
  Select,
  Form,
  Button,
  Carousel,
  Image,
  RequestState,
} from "@shared";
import { PageSection } from "@layouts";
import { useEditPet } from "../../hooks/useEditPet";
import {
  MAX_PET_AGE,
  MAX_PET_WEIGHT,
  MIN_PET_AGE,
  MIN_PET_WEIGHT,
  PET_COLORS,
} from "../../constants";
export function EditPetPage() {
  const {
    name,
    age,
    weight,
    color,
    images,
    errors,
    isLoading,
    isError,
    error,
    handleChange,
    handleSubmit,
    isPetFormEqualToPet,
  } = useEditPet();

  return (
    <RequestState
      isLoading={isLoading}
      isError={isError}
      errorMessage="Erro ao carregar os dados do pet."
      error={error}
    >
      <PageSection
        title={`Edite o Pet: ${name}`}
        subtitle="Os dados do pet serão atualizados"
      >
        <div className="form_background">
          <Form onSubmit={handleSubmit}>
            {images && images.length > 0 && (
              <Carousel>
                {images.map((image, index) => (
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
              text={<Typography size="medium" text="Atualizar Pet" />}
              disabled={isPetFormEqualToPet()}
            />
          </Form>
        </div>
      </PageSection>
    </RequestState>
  );
}
