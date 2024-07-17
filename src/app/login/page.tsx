"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const StudentForm = () => {
  const router = useRouter();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push("/home");
  };

  return (
    <div className='min-h-screen flex items-center justify-center '>
      <div className='flex w-full overflow-hidden'>
        <div
          className='hidden lg:block lg:w-1/2 bg-cover bg-no-repeat h-[100vh]'
          style={{
            backgroundImage: `url('/images/loginPage.jpeg')`,
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

        <div className='w-full lg:w-1/2 p-8  flex flex-col justify-center items-center'>
          <h2 className='text-4xl text-center'>
            Welcome to <span style={{ color: "#35A162" }}>Tuition</span>
          </h2>
          <p className='text-xl mt-1'>Enter your email to proceed</p>

          <form onSubmit={handleSubmit} className='my-12 w-1/2'>
            <button
              className='text-black px-4 py-2 rounded-2xl flex justify-center items-center gap-2 w-full'
              style={{ border: "1px solid #B8B4B4" }}
            >
              <Image
                src='/images/google_symbol.svg'
                alt='Google logo'
                width={24}
                height={24}
              />
              Sign In with Google
            </button>
            <button
              className='text-black px-4 py-2 rounded-2xl mt-5 flex justify-center items-center gap-2 w-full'
              style={{ border: "1px solid #B8B4B4" }}
            >
              <Image
                src='/images/apple_logo.svg'
                alt='Apple logo'
                width={24}
                height={24}
              />
              Sign In with Apple
            </button>

            <p className='text-red-500 text-sm text-right mt-2 mb-4 underline'>
              Forgot password?
            </p>

            <div className='flex items-center justify-center w-full my-4'>
              <div className='flex items-center justify-between w-full'>
                <div className='flex items-center w-1/2'>
                  <div className='w-1.5 h-1.5 bg-[#C9C7C7] rounded-full'></div>
                  <div className='h-[1px] bg-[#C9C7C7] flex-grow '></div>
                </div>
                <span className='mx-2'>Or</span>
                <div className='flex items-center w-1/2'>
                  <div className='h-[1px] bg-[#C9C7C7] flex-grow'></div>
                  <div className='w-1.5 h-1.5 bg-[#C9C7C7] rounded-full'></div>
                </div>
              </div>
            </div>
            <div className='mb-4 w-full flex flex-col'>
              <label htmlFor='email' className='text-center text-xl'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='mt-1 block w-full p-2 rounded-2xl'
                style={{ border: "1px solid #B8B4B4" }}
              />
            </div>

            <div className='text-center'>
              <button
                type='submit'
                className='px-6 py-3 bg-blueGradient text-white rounded-2xl w-full'
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
