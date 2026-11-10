import { useContext } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { BookContext } from '../../context/BookContext';

const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();
  const { readBooks, handleMarkAsRead, handleAddToWishlist } =
    useContext(BookContext);

  const book = books?.find((item) => item.bookId === Number(id));

  if (!book) {
    return (
      <div className='py-20 text-center'>
        <p className='mb-4 text-lg'>Book not found.</p>
        <Link to='/' className='btn'>
          Go Home
        </Link>
      </div>
    );
  }

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags = [],
    publisher,
    yearOfPublishing,
  } = book;

  const isRead = readBooks.some((readBook) => readBook.bookId === bookId);

  const bookInfo = [
    { label: 'Number of Pages:', value: totalPages },
    { label: 'Publisher:', value: publisher },
    { label: 'Year of Publishing:', value: yearOfPublishing },
    { label: 'Rating:', value: rating },
  ];

  return (
    <>
      <ToastContainer position='top-right' autoClose={2500} theme='colored' />

      <section className='mx-auto my-10 grid max-w-6xl grid-cols-1 gap-8 px-4 font-["Work_Sans",sans-serif] lg:grid-cols-2 lg:gap-12'>
        {/* Book image */}
        <figure className='flex min-h-96 items-center justify-center rounded-2xl bg-[#1313130D] p-10 lg:p-16'>
          <img
            src={image}
            alt={bookName}
            className='max-h-[560px] w-auto rounded object-contain shadow-xl'
          />
        </figure>

        {/* Book details */}
        <div>
          <h1 className='font-["Playfair_Display",serif] text-4xl font-bold text-[#131313]'>
            {bookName}
          </h1>
          <p className='mt-4 text-xl font-bold text-[#131313CC]'>
            By : {author}
          </p>

          <p className='mt-6 border-y border-[#13131326] py-4 text-xl font-bold text-[#131313CC]'>
            {category}
          </p>

          <p className='mt-6 text-justify text-sm leading-6 text-[#131313B3]'>
            <span className='font-bold text-[#131313]'>Review: </span>
            {review}
          </p>

          <div className='mt-6 flex flex-wrap items-center gap-3 border-b border-[#13131326] pb-6'>
            <span className='mr-1 font-bold text-[#131313]'>Tag</span>
            {tags.map((tag) => (
              <span
                key={tag}
                className='rounded-full bg-[#23BE0A0D] px-4 py-1.5 text-xs font-bold text-[#20af0a]'
              >
                #{tag}
              </span>
            ))}
          </div>

          <dl className='mt-6 space-y-3'>
            {bookInfo.map(({ label, value }) => (
              <div key={label} className='flex justify-between gap-4'>
                <dt className='font-bold text-[#3a3939e5]'>{label}</dt>
                <dd className='text-right font-bold text-[#131313]'>{value}</dd>
              </div>
            ))}
          </dl>

          <div className='mt-8 flex flex-wrap gap-4'>
            <button
              type='button'
              onClick={() => handleMarkAsRead(book)}
              className={`btn rounded-lg px-7 text-lg font-semibold ${
                isRead
                  ? 'border-none bg-[#23BE0A] text-white hover:bg-[#1ea508]'
                  : 'border border-[#1313134D] bg-white text-[#131313] hover:bg-gray-100'
              }`}
            >
              {isRead ? 'Read ✓' : 'Mark as Read'}
            </button>

            <button
              type='button'
              onClick={() => handleAddToWishlist(book)}
              className='btn rounded-lg border-none bg-[#50B1C9] px-7 text-lg font-semibold text-white hover:bg-[#3f9db4]'
            >
              Add to Wishlist
            </button>

            <Link to='/' className='btn rounded-lg px-7 text-lg font-semibold'>
              Go Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDetails;
