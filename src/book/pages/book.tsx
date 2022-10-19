import { Container, Spacer } from '@nextui-org/react';
import BookForm from '../components/BookForm';
import { BookTable } from '../components/BookTable';


const Book = () => {

    return(
        <Container css={{ paddingTop: '5%' }} alignContent="center" md>
            <BookForm />

            <BookTable />
        </Container>
    );
}

export default Book;