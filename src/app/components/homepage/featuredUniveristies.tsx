import Image from "next/image";

const FeaturedUniCard = ({ university }) => {
  return (
    <div className='bg-white rounded-xl pb-4'>
      <Image
        src={university.image}
        alt={university.name}
        width={345}
        height={173}
        className='w-full mb-2 rounded-t-lg '
      />
      <p className='font-semibold px-4 text-[#01020D]'>{university.name}</p>
      <div className='flex items-center gap-3   px-4'>
        <Image
          src='/images/locationIcon.svg'
          alt='Location Icon'
          width={12}
          height={16}
          className=' mb-2 rounded-t-lg '
        />
        <p className='text-sm text-[#5A5E5E] w-2/3'>{university.location}</p>
      </div>
    </div>
  );
};

export default FeaturedUniCard;
