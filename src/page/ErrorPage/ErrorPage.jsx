import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center'>
      <h1 className='text-9xl font-extrabold text-blue-600'>404</h1>

      <h2 className='mt-4 text-4xl font-bold text-gray-800'>Page Not Found</h2>

      <p className='mt-4 max-w-lg text-lg text-gray-500'>
        Sorry! The page you are looking for might have been removed, had its
        name changed, or is temporarily unavailable.
      </p>

      <div className='mt-8 flex flex-wrap justify-center gap-4'>
        <Link
          to='/'
          className='rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700'
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
