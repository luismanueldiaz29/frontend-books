import { Container, Grid, Spacer } from '@nextui-org/react';
import { FormProvider, useForm } from 'react-hook-form';
import { InputForm } from '../../shared/common/InputForm';
import { SubmitButton } from '../../shared/common/SubmitButton';
import { BookModel } from '../models/book';
import { saveBook } from '../services/saveBook';


const BookForm = () => {
    const bookForm = useForm<any>({
        mode: 'all',
        reValidateMode: 'onChange',
    });

    const handleSubmit = bookForm.handleSubmit(async (event) => {
        let resp: any = {};

        const data = {
            author_id: Number.parseInt(event.author_id),
            title: event.title,
            rating: event.rating
        };

        console.log(data)

        resp = saveBook(data)

        if(resp != null){
            bookForm.reset();
        }

        window.location.reload();
    });

    return (
        <Container alignContent="center" md>
            <h3>Book form</h3>
            <FormProvider {...bookForm}>
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
                        isSubmiting={bookForm.formState.isSubmitting}
                    />
                </form>
            </FormProvider>
            <Spacer />
        </Container>
        
    );
}

export default BookForm;