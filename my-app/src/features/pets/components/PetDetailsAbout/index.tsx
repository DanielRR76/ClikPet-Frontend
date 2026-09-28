import { Typography } from "@shared";
import type { Pet } from "../../types";
import styles from "./styles.module.css";
import { formatAge, formatWeight, standardizeText } from "../../utils";
import { useAuthContext } from "@stores";

export function PetDetailsAbout({
  pet,
  children,
}: {
  pet?: Pet;
  children?: React.ReactNode;
}) {
  const { user } = useAuthContext();
  const owner = pet?.owner.id === user?.id ? "Você" : pet?.owner.name;
  return (
    <div className={`${styles.pet_details_container} flex_column`}>
      <div className={`flex_align_center ${styles.pet_about}`}>
        <div className={styles.pet_text}>
          <Typography text={`Sobre ${pet?.name}`} variant="h2" size="large" />
          <Typography text="Descrição do pet não informada." size="base" />
        </div>
        {children}
      </div>
      <div className={styles.pet_characteristics}>
        <div className={styles.pet_text}>
          <Typography text="Dono" variant="h2" />
          <Typography text={standardizeText(owner)} size="base" />
        </div>
        <div className={styles.pet_text}>
          <Typography text="Localidade" variant="h2" />
          <Typography text={standardizeText("")} size="base" />
        </div>
        <div className={styles.pet_text}>
          <Typography text="Cor" variant="h2" />
          <Typography
            text={standardizeText(pet?.color) || "Não informado"}
            size="base"
          />
        </div>
      </div>
      <div className={styles.pet_characteristics}>
        <div className={styles.pet_text}>
          <Typography text="Idade" variant="h2" />
          <Typography text={formatAge(pet?.age)} size="base" />
        </div>
        <div className={styles.pet_text}>
          <Typography text="Peso" variant="h2" />
          <Typography text={formatWeight(pet?.weight)} size="base" />
        </div>
        <div className={styles.pet_text}>
          <Typography text="Sexo" variant="h2" />
          <Typography text={standardizeText("")} size="base" />
        </div>
      </div>
    </div>
  );
}
