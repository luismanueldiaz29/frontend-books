import { Table, useAsyncList } from '@nextui-org/react';
import { useEffect } from 'react';
import { useAsyncListStore } from '../../shared/hooks/useAsyncListStore';
import { getAllAuthor } from '../services/getAll';

const columns = [
  { name: '#', uid: 'author_id' },
  { name: 'name', uid: 'name' },
  { name: 'age', uid: 'age' },
  { name: 'gender', uid: 'gender' }
];

const size = 8;

export const AuthorTable = () => {
  const load = async () => {
    const results = await getAllAuthor();
    return {
      items: results,
      cursor: results.length,
    };
  };

  const {setAsyncList} = useAsyncListStore();

  useEffect(() => {
    setAsyncList(list);
  }, [])


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
          <Table.Row key={item.author_id}>
            {(key) => <Table.Cell>{item[key]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};