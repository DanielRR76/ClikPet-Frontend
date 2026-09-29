import styles from "../styles.module.css";
import myPetsStyles from "./styles.module.css";
import { PageSection } from "@layouts";
import { Typography, Image, Button, Badge } from "@shared";
import { useGetMyPets } from "../../hooks/useGetMyPets";
import { PATH, useNavigateWrapper } from "@router";
import { useDeletePet } from "../../hooks/useDeletePet";
import { useCompleteAdoption } from "../../hooks/useCompleteAdoption";
import { RequestState } from "@shared";
export function MyPetsPage() {
  const { data: myPets, isLoading, isError, error } = useGetMyPets();
  const { deletePet } = useDeletePet();
  const { completeAdoption } = useCompleteAdoption();
  const navigate = useNavigateWrapper();
  const hasPets = (myPets?.payload?.length ?? 0) !== 0;

  return (
    <RequestState
      isLoading={isLoading}
      isError={!hasPets || isError}
      errorMessage="Nenhum pet encontrado"
      error={error}
    >
      <PageSection title="Meus pets">
        <div className={`flex_align_center ${myPetsStyles.register_pet}`}>
          <Button
            color="transparent"
            text={<Typography text="Cadastrar pet" />}
            radius="medium"
            onClick={() => navigate(PATH.ADD_PET)}
          />
        </div>
        <div className={styles.container}>
          {myPets?.payload?.map((pet) => (
            <div className={styles.row} key={pet.id}>
              <div className={`flex_align_center ${styles.pet_info}`}>
                <Image
                  src={pet.images[0]}
                  alt={pet.name}
                  width="4rem"
                  height="4rem"
                  radius="medium"
                  border="thin"
                />
                <Typography color="inherit" text={pet.name} size="base" />
              </div>
              <div
                className={`flex_align_center ${myPetsStyles.my_pets_actions}`}
              >
                {pet.available ? (
                  <>
                    {pet.adopterId && (
                      <Button
                        color="success"
                        radius="medium"
                        text={
                          <Typography
                            color="inherit"
                            text="Concluir adoção"
                            size="base"
                          />
                        }
                        onClick={() => completeAdoption(pet.id)}
                      />
                    )}
                    <Button
                      color="transparent"
                      radius="medium"
                      text={
                        <Typography color="inherit" text="Editar" size="base" />
                      }
                      onClick={() => navigate(PATH.EDIT_PET(pet.id))}
                    />
                    <Button
                      color="danger"
                      radius="medium"
                      text={
                        <Typography
                          color="inherit"
                          text="Excluir"
                          size="base"
                        />
                      }
                      onClick={() => deletePet(pet.id)}
                    />
                  </>
                ) : (
                  <Badge
                    text={<Typography text="Adotado" size="base" />}
                    color="success"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </PageSection>
    </RequestState>
  );
}
