import styles from "../styles.module.css";
import myAdoptionsStyles from "./styles.module.css";
import { PageSection } from "@layouts";
import { Typography, Image, Badge, RequestState } from "@shared";
import { useGetMyAdoptions } from "../../hooks/useGetMyAdoptions";
import { ADOPTION_BADGE } from "../../constants";
export function MyAdoptionsPage() {
  const { data: myAdoptions, isLoading, isError, error } = useGetMyAdoptions();
  const hasPets = (myAdoptions?.payload?.length ?? 0) !== 0;

  return (
    <RequestState
      isLoading={isLoading}
      isError={!hasPets || isError}
      errorMessage="Nenhum pet encontrado"
      error={error}
    >
      <PageSection title="Minhas Adoções">
        <div className={styles.container}>
          <div className={myAdoptionsStyles.container}>
            <div className={myAdoptionsStyles.table}>
              {myAdoptions?.payload?.map((pet) => (
                <span>
                  <div>
                    <div className={`flex_align_center ${styles.pet_info}`}>
                      <Image
                        src={pet.images[0]}
                        alt={pet.name}
                        width="8rem"
                        height="8rem"
                        radius="medium"
                        border="thin"
                      />
                      <Typography
                        color="inherit"
                        text={pet.name}
                        size="medium"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      className={`${myAdoptionsStyles.pet_contact} flex_align_center`}
                    >
                      <Typography
                        color="inherit"
                        text="Ligue para: 21 99999-9999"
                        size="base"
                      />
                      <Typography
                        color="inherit"
                        text="Ou mande mensagem para: João"
                        size="base"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      className={`flex_align_center ${myAdoptionsStyles.my_adoptions_status}`}
                    >
                      <Badge
                        color={ADOPTION_BADGE.color(pet.adopterId)}
                        text={
                          <Typography
                            color="inherit"
                            text={ADOPTION_BADGE.status(pet.adopterId)}
                            size="base"
                          />
                        }
                      />
                    </div>
                  </div>
                </span>
              ))}
            </div>
          </div>
        </div>
      </PageSection>
    </RequestState>
  );
}
