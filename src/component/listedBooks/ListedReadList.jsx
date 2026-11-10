import { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../ui/BookCard';

const ListedReadList = ({ sortingType }) => {
  const { readBooks } = useContext(BookContext);

  if (readBooks.length === 0) {
    return (
      <div className='text-center text-gray-500'>
        You haven't read any books yet. Start adding books to your read list!
      </div>
    );
  }

  const sortedBooks = [...readBooks].sort((a, b) => {
    if (sortingType === 'pages') {
      return b.totalPages - a.totalPages;
    }

    if (sortingType === 'title') {
      return a.bookName.localeCompare(b.bookName);
    }

    return 0;
  });

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {sortedBooks.map((book) => (
        <BookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default ListedReadList;
