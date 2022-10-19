import { Table } from '@nextui-org/react';
import { Container } from '@nextui-org/react';

const columns = [
  { name: '#', uid: 'id' },
  { name: 'Nombre', uid: 'name' },
  { name: 'Dirección', uid: 'address' },
  { name: 'Código de habilitación', uid: 'enableCode' },
  { name: 'Correo', uid: 'email' },
  { name: 'Teléfono', uid: 'phone' },
];

const size = 8;

export const BookTable = () => {

  return (
    <Container alignContent="center" md>
        <h3>Books List</h3>
        <Table
        bordered
        shadow={false}
        aria-label="Tabla de sedes de ips"
        css={{ minWidth: '100%', height: `calc($space$14 * ${size + 2})` }}
        color="primary"
        selectionMode="multiple"
        >
        <Table.Header columns={columns}>
            {(column) => <Table.Column key={column.uid}>{column.name}</Table.Column>}
        </Table.Header>
        <Table.Body>

        </Table.Body>
        </Table>
    </Container>
  );
};