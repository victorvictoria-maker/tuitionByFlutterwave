import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const page = () => {
  return (
    <main className='rounded-lg bg-white border border-grayColor300 px-16 pt-12 pb-5 mt-32'>
      <h2 className='text-5xl font-bold font-moderat word-wide text-[#01020D] mb-11'>
        Counselling
      </h2>
      <p className='font-semiBold text-2xl'>Are you feeling overwhelmed?</p>
      <p className='mt-8 text-xl'>
        Get in touch with a student education counsellor if you need help with
        your applications.
      </p>
      <div className='mt-16 text-orangeColor flex gap-2 '>
        <span className='font-bold'>Get in touch</span>
        <GoArrowRight className='my-auto w-[24px] h-[24px]' />
      </div>
      <div className='flex gap-3 justify-end mt-10'>
        <Image
          src='/images/counselling2.svg'
          alt='Logo'
          width={88}
          height={88}
        />
        <Image
          src='/images/counselling1.svg'
          alt='Logo'
          width={88}
          height={88}
        />

        <Image
          src='/images/counselling3.svg'
          alt='Logo'
          width={88}
          height={88}
        />
        <Image
          src='/images/counselling4.svg'
          alt='Logo'
          width={88}
          height={88}
        />
        <Image
          src='/images/counselling5.svg'
          alt='Logo'
          width={88}
          height={88}
        />
        <Image
          src='/images/counselling6.svg'
          alt='Logo'
          width={88}
          height={88}
        />
      </div>
    </main>
  );
};

export default page;
