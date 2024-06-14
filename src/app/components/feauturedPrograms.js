import Image from "next/image";

const FeaturedPrograms = ({ university }) => {
  return (
    <div className='bg-white rounded-xl pb-4'>
      <Image
        src={university.image}
        alt={university.name}
        width={345}
        height={173}
        className='w-full mb-2 rounded-t-lg '
      />
      <p className='font-sm px-4 text-[#01020D] mb-4'>{university.course}</p>
      <div className='flex items-center gap-3  mb-4  px-4'>
        <Image
          src='/images/timeIcon.svg'
          alt='Time Icon'
          width={16}
          height={16}
          className=' mb-2 rounded-t-lg '
        />
        <p className='text-sm text-[#5A5E5E] w-2/3'>
          Application Deadline : <span className='text-[#000303]'>Oct 24 </span>
        </p>
      </div>
      <div className='flex items-center gap-3 mb-4 px-4'>
        <Image
          src='/images/yellowStar.svg'
          alt='Star Icon'
          width={17}
          height={16}
          className=' mb-2 rounded-t-lg '
        />
        <p className='text-sm font-bold w-2/3'>
          4.6 <span className='text-[#5A5E5E] font-normal'>(6k reviews)</span>
        </p>
      </div>
    </div>
  );
};

export default FeaturedPrograms;
