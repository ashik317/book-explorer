import BookImage from '../../assets/pngwing 1.png';

const Banner = () => {
  return (
    <div>
      <div className='hero bg-[#f5f5f5] min-h-[70vh] rounded-2xl mt-6 container mx-auto px-4'>
        <div className='hero-content flex-col lg:flex-row-reverse w-full justify-between'>
          <img
            alt='Tailwind CSS hero component'
            src={BookImage}
            className='max-w-sm rounded-lg shadow-2xl'
          />
          <div className='space-y-6'>
            <h1 className='text-5xl font-bold'>
              Books to freshen up <br /> your bookshelf
            </h1>

            <button className='btn btn-success'>View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
