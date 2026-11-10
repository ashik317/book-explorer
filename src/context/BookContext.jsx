import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

const BookContext = createContext();

const READ_KEY = 'readBooks';
const WISHLIST_KEY = 'wishlistBooks';

const getStoredBooks = (storageKey) => {
  try {
    const storedBooks = JSON.parse(localStorage.getItem(storageKey));
    return Array.isArray(storedBooks) ? storedBooks : [];
  } catch {
    return [];
  }
};

const hasBook = (books, bookId) =>
  books.some((storedBook) => storedBook.bookId === bookId);

const BookProvider = ({ children }) => {
  const [readBooks, setReadBooks] = useState(() => getStoredBooks(READ_KEY));
  const [wishlistBooks, setWishlistBooks] = useState(() =>
    getStoredBooks(WISHLIST_KEY),
  );

  const handleMarkAsRead = (book) => {
    if (hasBook(readBooks, book.bookId)) {
      toast.info(`"${book.bookName}" is already in your read list.`);
      return;
    }

    const updatedReadBooks = [...readBooks, book];
    localStorage.setItem(READ_KEY, JSON.stringify(updatedReadBooks));
    setReadBooks(updatedReadBooks);

    // A book that has been read no longer belongs in the wishlist
    const updatedWishlist = wishlistBooks.filter(
      (storedBook) => storedBook.bookId !== book.bookId,
    );
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(updatedWishlist));
    setWishlistBooks(updatedWishlist);

    toast.success(`"${book.bookName}" marked as read!`);
  };

  const handleAddToWishlist = (book) => {
    if (hasBook(readBooks, book.bookId)) {
      toast.warning(`You have already read "${book.bookName}".`);
      return;
    }

    if (hasBook(wishlistBooks, book.bookId)) {
      toast.info(`"${book.bookName}" is already in your wishlist.`);
      return;
    }

    const updatedWishlist = [...wishlistBooks, book];
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(updatedWishlist));
    setWishlistBooks(updatedWishlist);

    toast.success(`"${book.bookName}" added to your wishlist!`);
  };

  const data = {
    readBooks,
    wishlistBooks,
    handleMarkAsRead,
    handleAddToWishlist,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export { BookContext, BookProvider };
