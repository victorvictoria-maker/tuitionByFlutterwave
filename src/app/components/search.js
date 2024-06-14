import Image from "next/image";

const Search = () => {
  return (
    <div className='flex gap-3 mb-6'>
      <div className='flex items-center mb-8 w-3/4 rounded-xl border border-gray-100 bg-white'>
        <input
          type='text'
          placeholder='Search for colleges/institutions'
          className='flex-1 p-3 border-0 border-r-0 rounded-l-xl focus:outline-none'
        />
        <div className='p-2'>
          <Image
            src='/images/microphone-2.svg'
            alt='Microphone Icon'
            width={22}
            height={22}
          />
        </div>
      </div>
      <div className='flex items-center mb-8 gap-3 w-1/4 '>
        <div className='flex items-center rounded-xl border border-gray-100 bg-white h-full'>
          <Image
            src='/images/filter.svg'
            alt='Filter Icon'
            width={22}
            height={22}
            className='ml-4'
          />
          <input
            type='text'
            placeholder='More filters'
            className='flex-1 pl-3 py-3 border-0 border-r-0 rounded-l-xl w-full focus:outline-none'
          />
        </div>

        <div className='bg-primaryBlue px-[18px] py-[22px] rounded-lg'>
          <Image
            src='/images/search.svg'
            alt='Search Icon'
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
