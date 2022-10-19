import { Button, Grid, Loading } from '@nextui-org/react';
import { FiSave } from 'react-icons/fi';

export const SubmitButton = ({ isSubmiting = false }) => {
  return (
    <Grid.Container justify="flex-end">
      <Button
        type="submit"
        disabled={isSubmiting}
        icon={<FiSave color="currentColor" />}
        color="primary"
      >
        {!isSubmiting ? (
          'Guardar'
        ) : (
          <Loading type="points" color="currentColor" size="sm" />
        )}
      </Button>
    </Grid.Container>
  );
};