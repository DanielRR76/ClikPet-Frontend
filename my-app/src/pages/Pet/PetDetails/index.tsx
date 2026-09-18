import styles from "../styles.module.css";
import petDetailsStyles from "./styles.module.css";
import petTest from "../../../assets/petTest.jpg";
import petTest2 from "../../../assets/petTest2.jpg";
import { Typography, Button, Image, Carousel } from "@shared";
import { PageSection } from "../../../layouts/PageSection";
export function PetDetails() {
  return (
    <PageSection
      title="Conheça o Lobo"
      subtitle="Se tiver interesse, marque uma visita para conhecê-lo(a) pessoalmente!"
    >
      <div
        className={`${styles.container} ${petDetailsStyles.pet_details_align_center} flex_column`}
      >
        <div className={petDetailsStyles.pet_image_container}>
          <Carousel>
            <Image
              src={petTest}
              alt="Pet Test"
              width="50%"
              aspectRatio={{ width: 1, height: 1 }}
              border="thick"
              radius="large"
            />
            <Image
              src={petTest2}
              alt="Pet Test"
              width="50%"
              aspectRatio={{ width: 1, height: 1 }}
              border="thick"
              radius="medium"
            />
            <Image
              src={petTest2}
              alt="Pet Test"
              width="50%"
              aspectRatio={{ width: 1, height: 1 }}
              border="thick"
              radius="medium"
            />
          </Carousel>
        </div>
        <div
          className={`${petDetailsStyles.pet_details_container} flex_column`}
        >
          <div className={`flex_align_center ${petDetailsStyles.pet_about}`}>
            <div className={petDetailsStyles.pet_text}>
              <Typography text="Sobre o Lobo" variant="h2" size="large" />
              <Typography
                text="O Lobo é um cão muito amigável e brincalhão. Ele adora correr no
            parque e interagir com outros cães."
                size="base"
              />
            </div>
            <div
              className={`${petDetailsStyles.pet_details_actions} flex_column`}
            >
              <Button text={<Typography text="Editar" />} radius="medium" />
              <Button
                color="danger"
                text={<Typography text="Remover" />}
                radius="medium"
              />
              {/* <Button text={<Typography text="Agendar visita" />} /> */}
            </div>
          </div>
          <div className={petDetailsStyles.pet_characteristics}>
            <div className={petDetailsStyles.pet_text}>
              <Typography text="Dono" variant="h2" />
              <Typography
                text="Bartolomeu Silva Silva Silva Silva Silva"
                size="base"
              />
            </div>
            <div className={petDetailsStyles.pet_text}>
              <Typography text="Localidade" variant="h2" />
              <Typography
                text="São Paulo Paulo Paulo Tale Tale, SP"
                size="base"
              />
            </div>
            <div className={petDetailsStyles.pet_text}>
              <Typography text="Cor" variant="h2" />
              <Typography
                text="Marrom acizentado Marrom Marrom Marrom"
                size="base"
              />
            </div>
          </div>
          <div className={petDetailsStyles.pet_characteristics}>
            <div className={petDetailsStyles.pet_text}>
              <Typography text="Idade" variant="h2" />
              <Typography text="20 anos" size="base" />
            </div>
            <div className={petDetailsStyles.pet_text}>
              <Typography text="Peso" variant="h2" />
              <Typography text="100 kg" size="base" />
            </div>
            <div className={petDetailsStyles.pet_text}>
              <Typography text="Sexo" variant="h2" />
              <Typography text="Macho" size="base" />
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
