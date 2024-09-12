"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const HeroSection = () => {
  const userDetails = useContext(UserContext);
  const firstName = userDetails?.full_name
    ? userDetails.full_name.split(" ")[0]
    : "";

  const nameInitials = firstName.charAt(0).toUpperCase();

  return (
    <section className='mt-4 mb-10 '>
      {userDetails ? (
        <h2 className='text-3xl font-bold font-moderat word-wide text-[#01020D]'>
          Hello, {firstName}
        </h2>
      ) : (
        <h2 className='text-3xl font-bold font-moderat word-wide text-[#01020D]'>
          <p className='bg-gray-300 h-8 w-32 rounded-md animate-pulse'></p>
        </h2>
      )}

      <div
        className='mt-[40px] flex justify-between text-black  rounded-xl mb-6'
        style={{
          backgroundImage: `url('/images/home-banner.png')`,
        }}
      >
        <div className='px-12  py-10  w-1/2'>
          <h1 className='text-2xl font-bold mb-4 '>
            Discover Your Future at the <br />{" "}
            <span className='text-[#009E3A]'> Tuition </span> Virtual University
            Fair!
          </h1>
          <p className='leading-[26px]'>
            Meet top institutions, explore exciting programs, and <br /> take
            the next step toward your dreams.
          </p>
          <Link
            href='/'
            className='cursor-pointer  text-primaryBlue font-bold leading-[18px] '
          >
            <button className='flex gap-1 mt-8'>
              Register
              <Image
                src='/images/arrow-right.svg'
                alt='Right Arrow Icon'
                width={20}
                height={20}
              />
            </button>
          </Link>
        </div>
        <Image
          src='/images/collegeStudents.png'
          alt='College Students Going for Class '
          width={242}
          height={210}
        />
      </div>
    </section>
  );
};

export default HeroSection;
