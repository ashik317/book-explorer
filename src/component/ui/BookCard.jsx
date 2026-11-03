const BookCard = ({ book }) => {
  return (
    <div className='card bg-white w-full rounded-2xl border border-gray-100 shadow-[0_0_18px_rgba(0,0,0,0.12)] hover:shadow-[0_0_24px_rgba(0,0,0,0.20)] hover:-translate-y-1 transition-all duration-300'>
      {/* Book Image */}
      <figure className='p-5 bg-gray-50 rounded-t-2xl'>
        <img
          className='rounded-xl h-[320px] w-full object-contain'
          src={book.image}
          alt={book.bookName}
        />
      </figure>

      {/* Book Details */}
      <div className='card-body p-6'>
        {/* Tags */}
        <div className='flex flex-wrap items-center gap-2 mb-2'>
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className='badge badge-outline text-green-600 bg-green-50 border-green-200 px-3 py-3'
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className='card-title text-xl font-bold text-gray-800'>
          {book.bookName}
        </h2>

        {/* Author */}
        <p className='text-gray-500 font-medium'>By: {book.author}</p>

        {/* Divider */}
        <div className='border-t border-dashed border-gray-300 my-2'></div>

        {/* Category and Rating */}
        <div className='flex justify-between items-center font-semibold text-gray-600'>
          <span>{book.category}</span>

          <span className='flex items-center gap-1'>
            <span className='text-yellow-500 text-lg'>★</span>
            {book.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
