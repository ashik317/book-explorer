import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import BookDetails from '../page/bookDetails/BookDetails';
import BookList from '../page/bookList/BookList';
import Books from '../page/books/Books';
import ErrorPage from '../page/ErrorPage/ErrorPage';
import Homepage from '../page/homepage/Homepage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'books',
        element: <Books />,
      },
      {
        path: 'bookDetails/:id',
        element: <BookDetails />,
        loader: () => fetch('/booksData.json'),
      },
      {
        path: 'booklist',
        element: <BookList />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
