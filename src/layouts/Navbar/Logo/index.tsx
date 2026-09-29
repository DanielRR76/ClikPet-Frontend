import { RouterLink, Button, Icon, Typography } from "@shared";
import { PATH } from "@router";

export function Logo() {
  return (
    <div>
      <RouterLink href={PATH.HOME}>
        <Button
          icon={<Icon name="clik-pets" size="huge" />}
          color="translucent"
          text={<Typography text="ClikPets" variant="h2" size="large" />}
          border="thin"
          radius="small"
        />
      </RouterLink>
    </div>
  );
}
