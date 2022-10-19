import { Container, Grid, Spacer } from '@nextui-org/react';
import { FormProvider, useForm } from 'react-hook-form';
import { InputForm } from '../../shared/common/InputForm';
import { SubmitButton } from '../../shared/common/SubmitButton';
import { AuthorModel } from '../models/author';

const AuthorForm = () => {

    const authorForm = useForm<any>({
        mode: 'all',
        reValidateMode: 'onChange',
    });

    const handleSubmit = authorForm.handleSubmit(async (event) => {
        let resp: any = {};

        const data = {
            name: event.name,
            age: event.age,
            gender: event.gender
        };

        console.log(data)

        authorForm.reset();
    });

    return (
        <Container alignContent="center">
            <h3>Author form</h3>
            <FormProvider {...authorForm}>
                <form onSubmit={handleSubmit}>
                    <Grid.Container alignItems="flex-end" justify="flex-end">
                        <Grid xs>
                            <InputForm<AuthorModel>
                                fieldForm="name"
                                errorMessage="El nombre es requerido"
                                label="Name"
                                type="text"
                                required
                            />
                        </Grid>

                        <Spacer />

                        <Grid xs>
                            <InputForm<AuthorModel>
                                fieldForm="age"
                                errorMessage="La edad es requerida"
                                label="Age"
                                type="number"
                                required
                            />
                        </Grid>

                        <Spacer />

                        <Grid xs>
                            <InputForm<AuthorModel>
                                fieldForm="gender"
                                errorMessage="el genero es requerido"
                                label="gender"
                                type="text"
                                required
                            />
                        </Grid>
                    </Grid.Container>

                    <Spacer />

                    <SubmitButton
                        isSubmiting={authorForm.formState.isSubmitting}
                    />
                </form>
            </FormProvider>
            <Spacer />
        </Container>
        
    );
}

export default AuthorForm;