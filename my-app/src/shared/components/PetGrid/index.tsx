import styles from "./styles.module.css";
import petTest from "../../assets/petTest.jpg";
import petTest2 from "../../assets/petTest2.jpg";
import petTest3 from "../../assets/petTest3.jpg";
import { Typography, Button, Image } from "../index";
export const PetGrid = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.card} flex_align_center`}>
        <Image
          src={petTest2}
          alt="Pet Test"
          radius="small"
          aspectRatio={{ width: 1, height: 1 }}
        />
        <Typography
          color="inherit"
          size="medium"
          align="center"
          variant="h2"
          text="Pequetita"
        />
        <Typography
          color="inherit"
          size="base"
          align="center"
          variant="p"
          text="Peso: 5kg"
        />
        <div className={styles.details_wrapper}>
          <Button
            width="8rem"
            height="2rem"
            radius="large"
            text={<Typography color="inherit" text="Detalhes" />}
          />
        </div>
      </div>
      <div className={`${styles.card} flex_align_center`}>
        <Image
          src={petTest3}
          alt="Pet Test"
          radius="small"
          aspectRatio={{ width: 1, height: 1 }}
        />
        <Typography
          color="inherit"
          size="medium"
          align="center"
          variant="h2"
          text="Pequetita"
        />
        <Typography
          color="inherit"
          size="base"
          align="center"
          variant="p"
          text="Peso: 5kg"
        />
        <div className={styles.details_wrapper}>
          <Button
            color="primary"
            width="8rem"
            height="2rem"
            radius="large"
            text={<Typography color="inherit" text="Detalhes" />}
          />
        </div>
      </div>
      <div className={`${styles.card} flex_align_center`}>
        <Image
          src={petTest}
          alt="Pet Test"
          radius="small"
          aspectRatio={{ width: 1, height: 1 }}
        />
        <Typography
          color="inherit"
          size="medium"
          align="center"
          variant="h2"
          text="Pequetita"
        />
        <Typography
          color="inherit"
          size="base"
          align="center"
          variant="p"
          text="Peso: 5kg"
        />
        <div className={styles.details_wrapper}>
          <Button
            color="primary"
            width="8rem"
            height="2rem"
            radius="large"
            text={<Typography color="inherit" text="Detalhes" />}
          />
        </div>
      </div>
      <div className={`${styles.card} flex_align_center`}>
        <Image
          src={petTest}
          alt="Pet Test"
          radius="small"
          aspectRatio={{ width: 1, height: 1 }}
        />
        <Typography
          color="inherit"
          size="medium"
          align="center"
          variant="h2"
          text="Pequetita"
        />
        <Typography
          color="inherit"
          size="base"
          align="center"
          variant="p"
          text="Peso: 5kg"
        />
        <div className={styles.details_wrapper}>
          <Button
            color="primary"
            width="8rem"
            height="2rem"
            radius="large"
            text={<Typography color="inherit" text="Detalhes" />}
          />
        </div>
      </div>
    </div>
  );
};
