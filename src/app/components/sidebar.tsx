import Image from "next/image";
import Link from "next/link";
import Navlinks from "./navlinks";

const Sidebar = () => {
  return (
    <div className='w-1/6 py-4 '>
      <Image
        src='/images/logo3.svg'
        alt='Logo'
        width={144}
        height={48}
        className='mb-10 mt-20 mx-auto'
      />

      <Navlinks />
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
