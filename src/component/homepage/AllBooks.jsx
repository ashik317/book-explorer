import { use } from 'react';
import BookCard from '../ui/BookCard';

const booksPromise = fetch('/booksData.json').then((response) =>
  response.json(),
);

const AllBooks = () => {
  const books = use(booksPromise);
  console.log('Books:', books);

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold mt-24 text-center mb-6'>Books</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {books.map((book) => {
          return <BookCard key={book.bookId} book={book} />;
        })}
      </div>
    </div>
  );
};

export default AllBooks;
