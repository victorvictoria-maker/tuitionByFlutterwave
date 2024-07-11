import Image from "next/image";
import { GoArrowLeft } from "react-icons/go";

export const metadata = {
  title: "Counselling",
};

const page = () => {
  return (
    <main className='rounded-lg bg-white border border-grayColor300 px-16 pt-12 pb-12 my-32 '>
      <div className='flex gap-2 '>
        <GoArrowLeft className=' w-[40px] h-[40px]' />
        <h2 className='font-bold text-2xl text-[#01020D] my-auto'>Tuition</h2>
      </div>
      <p className='text-xl text-[#01020D] pl-12'>Support</p>
      <div className='my-24 flex flex-col items-center justify-center p-4'>
        <Image
          src='/images/supportMessage.png'
          alt='Logo'
          width={424}
          height={227}
          className='mx-auto'
        />
        <p className='mt-20 text-xl text-[#414141]'>
          Hello there! How can we help?
        </p>
      </div>
      <div className='flex items-center mb-8 rounded-xl border border-grayColor300 bg-white'>
        <div className='p-2'>
          <Image
            src='/images/sendMessage2.svg'
            alt='Microphone Icon'
            width={35}
            height={35}
          />
        </div>
        <input
          type='text'
          placeholder='Message ...'
          className='flex-1 py-3 pr-4 font-semiBold text-lg border-0 border-r-0 rounded-l-xl focus:outline-none text-[#414141]'
        />
        <div className='p-2'>
          <Image
            src='/images/sendMessage.svg'
            alt='Microphone Icon'
            width={35}
            height={35}
          />
        </div>
      </div>
    </main>
  );
};

export default page;
