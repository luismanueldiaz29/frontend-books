import { AuthorResponseModal } from '../../author/models/authorResponse';
export interface BookResponseModal{
    book_id: number,
    title: string,
    rating: string,
    author_id: number,
    author: AuthorResponseModal
}