import { Typography, Button, Image, RequestState } from "@shared";
import styles from "./styles.module.css";
import { useGetAllPets } from "../../hooks/useGetAllPets";
import { PATH, useNavigateWrapper } from "@router";
export const PetGrid = () => {
  const { data, isLoading, isError } = useGetAllPets();
  const navigate = useNavigateWrapper();
  const hasPets = (data?.payload?.length ?? 0) !== 0;

  const goToDetailsPage = (petId: number) => {
    navigate(PATH.PET_DETAILS(petId));
  };

  return (
    <RequestState
      isLoading={isLoading}
      isError={!hasPets || isError}
      errorMessage="Nenhum pet encontrado"
    >
      <div className={styles.container}>
        {data?.payload?.map((pet, index) => (
          <div
            key={pet.id ?? index}
            className={`${styles.card} flex_align_center`}
          >
            <Image
              src={pet.images[0]}
              alt="Pet Test"
              radius="small"
              aspectRatio={{ width: 1, height: 1 }}
            />
            <Typography
              color="inherit"
              size="medium"
              align="center"
              variant="h2"
              text={pet.name}
            />
            <Typography
              color="inherit"
              size="base"
              align="center"
              variant="p"
              text={`Peso: ${pet.weight}kg`}
            />
            <div className={styles.details_wrapper}>
              <Button
                color="primary"
                width="8rem"
                height="2rem"
                radius="large"
                disabled={!pet.available}
                text={<Typography color="inherit" text="Detalhes" />}
                onClick={() => goToDetailsPage(pet.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </RequestState>
  );
};
