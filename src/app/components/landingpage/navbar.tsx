import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className=' flex justify-between items-center py-5  mx-24'>
        <div className='flex-1 flex justify-start'>
          <Image
            src='/images/logo3.svg'
            alt='Tuition Logo'
            width={100}
            height={100}
          />
        </div>
        <ul className='flex-1 flex justify-center space-x-6 text-textColor'>
          <Link href='/'>Features</Link>
          <Link href='/pricing'>Pricing</Link>
          <Link href='/'>Contact Us</Link>
        </ul>
        <div className='flex-1 flex justify-end'>
          <Link href='/signup'>
            <button className='bg-primaryBlue text-neutralWhite py-2 px-4 rounded-lg font-light'>
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
