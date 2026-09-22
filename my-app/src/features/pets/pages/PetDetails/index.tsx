import styles from "../styles.module.css";
import petDetailsStyles from "./styles.module.css";
import { Image, Carousel, RequestState } from "@shared";
import { PageSection } from "@layouts";
import { useGetPetById } from "../../hooks/useGetPetById";
import { useParamsWrapper } from "@router";
import { PetDetailsAbout } from "../../components/PetDetailsAbout";
import { PetDetailsActions } from "../../components/PetDetailsActions";
export function PetDetailsPage() {
  const { id } = useParamsWrapper();
  const { data, isLoading, isError } = useGetPetById(Number(id));
  const pet = data?.payload;
  return (
    <RequestState
      isLoading={isLoading}
      isError={isError}
      errorMessage="Erro ao carregar os detalhes do pet."
    >
      <PageSection
        title={`Conheça ${pet?.name}`}
        subtitle="Se tiver interesse, marque uma visita para conhecê-lo(a) pessoalmente!"
      >
        <div
          className={`${styles.container} ${petDetailsStyles.pet_details_align_center} flex_column`}
        >
          <div className={petDetailsStyles.pet_image_container}>
            <Carousel>
              {(pet?.images ?? []).map((image) => (
                <Image
                  key={image}
                  src={image}
                  alt="Pet Test"
                  width="100%"
                  maxWidth="35rem"
                  aspectRatio={{ width: 1, height: 1 }}
                  border="thick"
                  radius="large"
                />
              ))}
            </Carousel>
          </div>
          <PetDetailsAbout
            pet={pet}
            petDetailsActions={
              <PetDetailsActions
                ownerId={pet?.ownerId}
                adopterId={pet?.adopterId}
              />
            }
          />
        </div>
      </PageSection>
    </RequestState>
  );
}
