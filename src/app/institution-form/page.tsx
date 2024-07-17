"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProgressIndicator from "../components/progressIndicator";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const InstitutionForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='min-h-screen flex items-center justify-center '>
      <div className='flex w-full overflow-hidden'>
        <div
          className='hidden lg:block lg:w-1/2 bg-cover bg-no-repeat'
          style={{
            backgroundImage: `url('/images/instituionCreateAccount.jpeg')`,
            backgroundColor: "rgba(25, 25, 25, 0.6)",
            backgroundBlendMode: "overlay",
            backgroundPosition: "50%",
            minHeight: "100%",
          }}
        >
          <Image
            src='/images/whitelogo3.svg'
            alt='Tuition logo'
            width={171}
            height={57}
            className='pt-14 ps-16'
          />
        </div>

        <div className='w-full lg:w-1/2 p-8 mb-24 flex flex-col justify-center'>
          <div className=' flex items-center justify-center mb-10'>
            <div className='bg-blueGradient flex justify-center items-center text-white py-1 px-1 rounded-xl'>
              <p className='px-4 py-2'>Students</p>
              <div className='flex'>
                <p className='bg-white text-blueGradient rounded-xl px-4 py-2'>
                  Institutions
                </p>
              </div>
            </div>
          </div>

          <h2 className='text-4xl mb-6 text-center'>
            Welcome to <span style={{ color: "#35A162" }}>Tuition</span>
          </h2>

          <form onSubmit={handleSubmit} className='space-y-4 ml-[10%]'>
            <div className='mb-4 w-3/4'>
              <label htmlFor='institutionName' className='text-xl font-medium '>
                Name of Institution:
              </label>
              <input
                type='text'
                id='institutionName'
                name='institutionName'
                className='mt-1 w-full p-2 border border-gray-300 rounded-2xl'
                required
              />
            </div>
            <div className='mb-4 w-3/4'>
              <label htmlFor='institutionType' className='text-xl font-medium '>
                Type of Institution:
              </label>
              <input
                type='text'
                id='institutionType'
                name='institutionType'
                className='mt-1 w-full p-2 border border-gray-300 rounded-2xl'
                required
              />
            </div>

            <div className='mb-4  w-3/4'>
              <label htmlFor='website' className='text-xl font-medium '>
                Website if applicable:
              </label>
              <input
                type='text'
                id='website'
                name='website'
                className='mt-1 w-full p-2 border border-gray-300 rounded-2xl'
                required
              />
            </div>

            <div className='mb-4  w-3/4'>
              <label htmlFor='address' className='text-xl font-medium '>
                Address:
              </label>
              <input
                type='text'
                id='address'
                name='address'
                className='mt-1 w-full p-2 border border-gray-300 rounded-2xl'
                required
              />
            </div>

            <div className='mb-4  w-3/4'>
              <label htmlFor='email' className='text-xl font-medium '>
                Email Address:
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='mt-1 w-full p-2 border border-gray-300 rounded-2xl'
                required
              />
            </div>
            <div className='mb-4  w-3/4'>
              <label htmlFor='country' className='text-xl font-medium '>
                State, Country:
              </label>
              <input
                type='text'
                id='country'
                name='country'
                className='mt-1 w-full p-2 border border-gray-300 rounded-2xl'
                required
              />
            </div>

            <div className='mb-4  w-3/4'>
              <label htmlFor='description' className='text-xl font-medium '>
                Brief Description:
              </label>
              <input
                type='text'
                id='description'
                name='description'
                className='mt-1 w-full p-2 border border-gray-300 rounded-2xl'
                required
              />
            </div>

            <div className='pb-16 relative w-3/4'>
              <label htmlFor='password' className='text-xl font-medium '>
                Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id='password'
                name='password'
                className='mt-1 w-full p-2 border border-gray-300 rounded-2xl'
                required
              />
              <button
                type='button'
                onClick={togglePasswordVisibility}
                className='absolute inset-y-0 right-0 top-6 px-3  text-gray-600 '
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>

            <button
              type='submit'
              className='w-3/4 px-6 py-3 my-20 bg-blueGradient text-white rounded-2xl '
            >
              Continue
            </button>

            <div className='mb-4 text-sm  w-10/12 '>
              <p className='leading-5'>
                By clicking “Continue”, I acknowledge that I have read and do
                hereby accept the terms and conditions in the Flutterwave&apos;s{" "}
                <Link
                  href='/'
                  style={{ color: "#516F8B", textDecoration: "underline" }}
                >
                  Terms of Use{" "}
                </Link>
                and{" "}
                <Link
                  href='/'
                  style={{ color: "#516F8B", textDecoration: "underline" }}
                >
                  {" "}
                  Privacy Policy.
                </Link>
              </p>
              <p className='leading-5 mt-2 mb-20'>
                Tuition is powered by Swap, a product of Flutterwave Technology
                Solutions Limited - Licensed by the Central Bank of Nigeria in
                partnership with Kadavra BDC and Wema Bank
              </p>
            </div>

            <ProgressIndicator step={2} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default InstitutionForm;
