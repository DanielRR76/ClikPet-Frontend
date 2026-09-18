import styles from "../styles.module.css";
import myAdoptionsStyles from "./styles.module.css";
import petTest from "../../../assets/petTest.jpg";
import petTest3 from "../../../assets/petTest3.jpg";
import { PageSection } from "../../../layouts/PageSection";
import { Typography, Image, Badge } from "@shared";
export function MyAdoptions() {
  return (
    <PageSection title="Minhas Adoções">
      <div className={styles.container}>
        <div className={myAdoptionsStyles.container}>
          <div className={myAdoptionsStyles.table}>
            <span>
              <div>
                <div className={`flex_align_center ${styles.pet_info}`}>
                  <Image
                    src={petTest}
                    alt="Totó"
                    width="8rem"
                    height="8rem"
                    radius="medium"
                    border="thin"
                  />
                  <Typography color="inherit" text="Bartolomeu" size="medium" />
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
                    text={
                      <Typography color="inherit" text="Status" size="base" />
                    }
                    // border="thin"
                  />
                </div>
              </div>
            </span>
            <span>
              <div>
                <div className={`flex_align_center ${styles.pet_info}`}>
                  <Image
                    src={petTest3}
                    alt="Totó"
                    width="8rem"
                    height="8rem"
                    radius="medium"
                    border="thin"
                  />
                  <Typography
                    color="inherit"
                    text="Bartolomeu Junior Junior"
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
                    color="disabled"
                    text={
                      <Typography
                        color="inherit"
                        text="Em andamento"
                        size="base"
                      />
                    }
                    // border="thin"
                  />
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
