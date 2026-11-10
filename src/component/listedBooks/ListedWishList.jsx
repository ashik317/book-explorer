import { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../ui/BookCard';

const ListedWishList = () => {
  const { wishlistBooks } = useContext(BookContext);

  if (wishlistBooks.length === 0) {
    return (
      <div className='text-center text-gray-500'>
        Your wishlist is empty. Start adding books to your wishlist!
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {wishlistBooks.map((book) => (
        <BookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default ListedWishList;
