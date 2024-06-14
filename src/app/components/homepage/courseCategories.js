const Categories = ({ categories }) => {
  return (
    <>
      <div className='grid grid-cols-3 gap-4 mb-8 '>
        {categories.map((category, index) => (
          <button
            key={index}
            className='bg-primaryBlue rounded-xl py-5 text-white'
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default Categories;
