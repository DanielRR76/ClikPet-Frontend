import { Badge, Button, Typography } from "@shared";
import { useAuthContext } from "@stores";
import styles from "./styles.module.css";
import { PATH, useNavigateWrapper, useParamsWrapper } from "@router";
import { useScheduleAdoption } from "../../hooks/useScheduleAdoption";
import { useDeletePet } from "../../hooks/useDeletePet";
import type { Pet } from "../../types";
export function PetDetailsActions({ pet }: { pet?: Pet }) {
  const { user } = useAuthContext();
  const { id } = useParamsWrapper();
  const petId = Number(id);
  const { scheduleAdoption } = useScheduleAdoption(petId);
  const { deletePet } = useDeletePet();
  const navigate = useNavigateWrapper();
  const goTo = (path: string) => {
    navigate(path);
  };
  const selectActions = () => {
    const petOwnerId = pet?.owner.id;
    const adopterId = pet?.adopterId;
    if (!petOwnerId) return;
    if (user && user.id === petOwnerId) {
      return (
        <>
          <Button
            color="transparent"
            text={<Typography text="Editar" />}
            radius="medium"
            onClick={() => goTo(PATH.EDIT_PET(petId))}
          />
          <Button
            color="danger"
            text={<Typography text="Remover" />}
            radius="medium"
            onClick={() => deletePet(petId)}
          />
        </>
      );
    } else if (user && user.id !== petOwnerId) {
      return adopterId !== user.id ? (
        <Button
          color="success"
          text={<Typography text="Agendar visita" />}
          radius="medium"
          onClick={() => scheduleAdoption(petId)}
        />
      ) : (
        <Badge
          text={<Typography text="Visita agendada" size="base" />}
          color="success"
        />
      );
    } else {
      return (
        <>
          <Button
            color="transparent"
            text={<Typography text="Login" />}
            radius="medium"
            onClick={() => goTo(PATH.LOGIN)}
          />
          <Button
            color="transparent"
            text={<Typography text="Cadastrar" />}
            radius="medium"
            onClick={() => goTo(PATH.REGISTER)}
          />
        </>
      );
    }
  };
  return (
    <div className={`${styles.pet_details_actions} flex_column`}>
      {selectActions()}
    </div>
  );
}
