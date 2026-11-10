import { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../ui/BookCard';

const ListedReadList = () => {
  const { readBooks } = useContext(BookContext);

  if (readBooks.length === 0) {
    return (
      <div className='text-center text-gray-500'>
        You haven't read any books yet. Start adding books to your read list!
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {readBooks.map((book) => (
        <BookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default ListedReadList;
