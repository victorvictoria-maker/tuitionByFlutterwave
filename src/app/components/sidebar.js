import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className='w-1/6 p-4'>
      <Image
        src='/images/logo3.svg'
        alt='Logo'
        width={144}
        height={48}
        className='mb-10 mt-20 mx-auto'
      />

      <ul className='flex flex-col gap-6  w-3/4 mx-auto pb-[150px]'>
        <Link
          href='/'
          className='cursor-pointer bg-blueGradient text-white rounded-[10px]'
        >
          <button className='flex gap-3 my-3 mx-[18px] '>
            <Image
              src='/images/home-alt.svg'
              alt='Home Icon'
              width={20}
              height={20}
            />{" "}
            Home
          </button>
        </Link>
        <Link href='/' className='cursor-pointer text-black rounded-[10px]'>
          <button className='flex gap-3 my-3 mx-[18px]'>
            <Image
              src='/images/grid-22.svg'
              alt='Dashboard Icon'
              width={20}
              height={20}
            />{" "}
            Dashboard
          </button>
        </Link>
        <Link href='/' className='cursor-pointer text-black rounded-[10px]'>
          <button className='flex gap-3 my-3 mx-[18px]'>
            <Image
              src='/images/coins22.svg'
              alt='Financial Aid Icon'
              width={20}
              height={20}
            />{" "}
            Financial Aid
          </button>
        </Link>
        <Link href='/' className='cursor-pointer text-black rounded-[10px]'>
          <button className='flex gap-3 my-3 mx-[18px]'>
            <Image
              src='/images/calendar22.svg'
              alt='Event Icon'
              width={20}
              height={20}
            />{" "}
            Events
          </button>
        </Link>
        <Link href='/' className='cursor-pointer text-black rounded-[10px]'>
          <button className='flex gap-3 my-3 mx-[18px]'>
            <Image
              src='/images/heart.svg'
              alt='Counselling Icon'
              width={20}
              height={20}
            />{" "}
            Counselling
          </button>
        </Link>
        <Link href='/' className='cursor-pointer text-black rounded-[10px]'>
          <button className='flex gap-3 my-3 mx-[18px]'>
            <Image
              src='/images/bulb22.svg'
              alt='Resources Icon'
              width={20}
              height={20}
            />{" "}
            Resources
          </button>
        </Link>
        <Link href='/' className='cursor-pointer text-black rounded-[10px]'>
          <button className='flex gap-3 my-3 mx-[18px]'>
            <Image
              src='/images/user-group22.svg'
              alt='Community Icon'
              width={20}
              height={20}
            />{" "}
            Community
          </button>
        </Link>
        <Link href='/' className='cursor-pointer text-black rounded-[10px]'>
          <button className='flex gap-3 my-3 mx-[18px]'>
            <Image
              src='/images/message.svg'
              alt='Support Icon'
              width={20}
              height={20}
            />{" "}
            Support
          </button>
        </Link>
      </ul>
      <Link
        href='/'
        className='cursor-pointer bg-blueGradient text-black rounded-[10px] '
      >
        <button className='flex gap-3 my-3 mx-[18px]'>
          <Image
            src='/images/sign-out.svg'
            alt='Signout Icon'
            width={20}
            height={20}
          />{" "}
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
