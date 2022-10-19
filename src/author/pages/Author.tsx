import { Container, Spacer } from '@nextui-org/react';
import AuthorForm from '../components/AuthorForm';

const Author = () => {

    return(
        <Container css={{ paddingTop: '5%' }} alignContent="center" md>
            <AuthorForm />
        </Container>
    );
}

export default Author;