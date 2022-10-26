import { Container, Grid, Spacer } from '@nextui-org/react';
import { FormProvider, useForm } from 'react-hook-form';
import { InputForm } from '../../shared/common/InputForm';
import { SubmitButton } from '../../shared/common/SubmitButton';
import { useAsyncListStore } from '../../shared/hooks/useAsyncListStore';
import { BookModel } from '../models/book';
import { saveBook } from '../services/saveBook';


const BookForm = () => {
    const {reloadList} = useAsyncListStore();

    const BookForm = useForm<any>({
        mode: 'all',
        reValidateMode: 'onChange',
    });

    const handleSubmit = BookForm.handleSubmit(async (event) => {
        let resp: any = {};

        const data = {
            author_id: event.author_id,
            title: event.title,
            rating: event.rating
        };

        resp = saveBook(data)

        if(resp != null){
            reloadList();
            BookForm.reset();
        }
    });

    return (
        <Container alignContent="center" md>
            <h3>Book form</h3>
            <FormProvider {...BookForm}>
                <form onSubmit={handleSubmit}>
                    <Grid.Container alignItems="flex-end" justify="flex-end">
                        <Grid xs>
                            <InputForm<BookModel>
                                fieldForm="author_id"
                                errorMessage="The author is required required"
                                label="Author id"
                                type="number"
                                required
                            />
                        </Grid>

                        <Spacer />

                        <Grid xs>
                            <InputForm<BookModel>
                                fieldForm="title"
                                errorMessage="Title is required"
                                label="Title"
                                type="text"
                                required
                            />
                        </Grid>

                        <Spacer />

                        <Grid xs>
                            <InputForm<BookModel>
                                fieldForm="rating"
                                errorMessage="Rating is required"
                                label="Rating"
                                type="text"
                                required
                            />
                        </Grid>
                    </Grid.Container>

                    <Spacer />

                    <SubmitButton
                        isSubmiting={BookForm.formState.isSubmitting}
                    />
                </form>
            </FormProvider>
            <Spacer />
        </Container>
        
    );
}

export default BookForm;