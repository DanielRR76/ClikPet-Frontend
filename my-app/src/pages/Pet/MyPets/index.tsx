import { Typography, Image, Button } from "@shared";
import styles from "../styles.module.css";
import myPetsStyles from "./styles.module.css";
import petTest from "../../../assets/petTest.jpg";
import petTest1 from "../../../assets/petTest2.jpg";
import { PageSection } from "../../../layouts/PageSection";
export function MyPets() {
  return (
    <PageSection title="Meus pets">
      <div className={`flex_align_center ${myPetsStyles.register_pet}`}>
        <Button
          color="transparent"
          text={<Typography text="Cadastrar pet" />}
          radius="medium"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`flex_align_center ${styles.pet_info}`}>
            <Image
              src={petTest}
              alt="Totó"
              width="4rem"
              height="4rem"
              radius="medium"
              border="thin"
            />
            <Typography
              color="inherit"
              text="Bartolomeu Junior Sil"
              size="base"
            />
          </div>
          <div className={`flex_align_center ${myPetsStyles.my_pets_actions}`}>
            <Button
              color="transparent"
              radius="medium"
              text={<Typography color="inherit" text="Editar" size="base" />}
            />
            <Button
              color="danger"
              radius="medium"
              text={<Typography color="inherit" text="Excluir" size="base" />}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={`flex_align_center ${styles.pet_info}`}>
            <Image
              src={petTest1}
              alt="Totó"
              width="4rem"
              height="4rem"
              radius="medium"
              border="thin"
            />
            <Typography color="inherit" text="Lilica" size="base" />
          </div>
          <div className={`flex_align_center ${myPetsStyles.my_pets_actions}`}>
            <Button
              color="transparent"
              radius="medium"
              text={<Typography color="inherit" text="Editar" size="base" />}
            />
            <Button
              color="danger"
              radius="medium"
              text={<Typography color="inherit" text="Excluir" size="base" />}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={`flex_align_center ${styles.pet_info}`}>
            <Image
              src={petTest1}
              alt="Totó"
              width="4rem"
              height="4rem"
              radius="medium"
              border="thin"
            />
            <Typography color="inherit" text="Lilica" size="base" />
          </div>
          <div className={`flex_align_center ${myPetsStyles.my_pets_actions}`}>
            <Button
              color="transparent"
              radius="medium"
              text={<Typography color="inherit" text="Editar" size="base" />}
            />
            <Button
              color="danger"
              radius="medium"
              text={<Typography color="inherit" text="Excluir" size="base" />}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={`flex_align_center ${styles.pet_info}`}>
            <Image
              src={petTest1}
              alt="Totó"
              width="4rem"
              height="4rem"
              radius="medium"
              border="thin"
            />
            <Typography color="inherit" text="Lilica" size="base" />
          </div>
          <div className={`flex_align_center ${myPetsStyles.my_pets_actions}`}>
            <Button
              color="transparent"
              radius="medium"
              text={<Typography color="inherit" text="Editar" size="base" />}
            />
            <Button
              color="danger"
              radius="medium"
              text={<Typography color="inherit" text="Excluir" size="base" />}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={`flex_align_center ${styles.pet_info}`}>
            <Image
              src={petTest1}
              alt="Totó"
              width="4rem"
              height="4rem"
              radius="medium"
              border="thin"
            />
            <Typography color="inherit" text="Lilica" size="base" />
          </div>
          <div className={`flex_align_center ${myPetsStyles.my_pets_actions}`}>
            <Button
              color="transparent"
              radius="medium"
              text={<Typography color="inherit" text="Editar" size="base" />}
            />
            <Button
              color="danger"
              radius="medium"
              text={<Typography color="inherit" text="Excluir" size="base" />}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={`flex_align_center ${styles.pet_info}`}>
            <Image
              src={petTest1}
              alt="Totó"
              width="4rem"
              height="4rem"
              radius="medium"
              border="thin"
            />
            <Typography color="inherit" text="Lilica" size="base" />
          </div>
          <div className={`flex_align_center ${myPetsStyles.my_pets_actions}`}>
            <Button
              color="transparent"
              radius="medium"
              text={<Typography color="inherit" text="Editar" size="base" />}
            />
            <Button
              color="danger"
              radius="medium"
              text={<Typography color="inherit" text="Excluir" size="base" />}
            />
          </div>
        </div>
      </div>
    </PageSection>
  );
}
