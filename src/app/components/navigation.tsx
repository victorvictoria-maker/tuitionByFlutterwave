import Image from "next/image";

const Navbar = () => {
  return (
    <div className='bg-wjite flex justify-end '>
      <div className=' flex items-center gap-6 w-2/6 justify-center bg-white px-16 py-6'>
        <Image
          src='/images/bell.svg'
          alt='Notification Icon'
          width={40}
          height={40}
        />
        <div
          className='flex items-center justify-center w-[40px] h-[40px] bg-[#eee]  rounded-full font-bold text-[#01020D]'
          style={{ border: "1px solid #35A162" }}
        >
          <span className='text-xl font-bold'>J</span>
        </div>
        <p className='font-semibold'>Jewel</p>
      </div>
    </div>
  );
};

export default Navbar;
