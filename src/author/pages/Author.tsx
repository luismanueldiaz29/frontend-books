import { Container, Spacer } from '@nextui-org/react';
import AuthorForm from '../components/AuthorForm';
import { AuthorTable } from '../components/AuthorTable';

const Author = () => {

    return(
        <Container css={{ paddingTop: '5%' }} alignContent="center" md>
            <AuthorForm />
            
            <AuthorTable />
        </Container>
    );
}

export default Author;