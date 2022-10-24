import { Table, useAsyncList } from '@nextui-org/react';
import { getAllBook } from '../services/getAll';

const columns = [
  { name: '#', uid: 'book_id' },
  { name: 'title', uid: 'title' },
  { name: 'rating', uid: 'rating' },
  { name: 'id author', uid: 'author_id' }
  //{ name: 'name author', uid: 'author.name' }
];

const size = 8;

export const BookTable = () => {

  const load = async () => {
    const results = await getAllBook();
    return {
      items: results,
      cursor: results.length,
    };
  };

  const list = useAsyncList({ load });

  return (
    <Table
      bordered
      shadow={false}
      aria-label="Tabla de eventos"
      css={{ minWidth: '100%', height: `calc($space$14 * ${size + 2})` }}
      color="primary"
      selectionMode="multiple"
    >
      <Table.Header columns={columns}>
        {(column) => <Table.Column key={column.uid}>{column.name}</Table.Column>}
      </Table.Header>
      <Table.Body
        items={list.items}
        loadingState={list.loadingState}
        onLoadMore={list.loadMore}
      >
        {(item) => (
          <Table.Row key={item.book_id}>
            {(key) => <Table.Cell>{item[key]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};