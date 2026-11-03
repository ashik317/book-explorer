import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
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
    ],
    errorElement: <ErrorPage />,
  },
]);
