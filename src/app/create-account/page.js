"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProgressIndicator from "../components/progressIndicator";

export default function CreateAccount() {
  const [accountType, setAccountType] = useState("student");
  const router = useRouter();

  const handleContinue = () => {
    if (accountType === "student") {
      router.push("/student-form");
    } else if (accountType === "institution") {
      router.push("/institution-form");
    }
  };

  return (
    <div className='min-h-screen flex'>
      <div className='w-full md:w-1/2 pt-16 ps-24  flex flex-col '>
        <div className=''>
          <Image
            src='/images/logo3.svg'
            alt='Create Account Image'
            width={100}
            height={100}
          />
        </div>
        <div className=' mt-28 ps-12 pe-32'>
          <h2 className='text-4xl font-bold mb-4'>Create Account</h2>
          <p className='mb-8'>
            Welcome to Tuition, Kindly register your account with us today to
            enjoy all benefits tuition has to offer
          </p>

          <form>
            <div
              className={`mb-4 flex items-center justify-between border-2 rounded-lg p-2 w-4/6 ${
                accountType === "student"
                  ? "border-blueGradient"
                  : "border-gray-300"
              }`}
            >
              <label className='flex items-center w-full'>
                <Image
                  src='/images/studentIcon.svg'
                  alt='Student Icon'
                  width={24}
                  height={24}
                  className='mr-2'
                />
                <span
                  className={`flex-grow text-sm font-medium ${
                    accountType === "student"
                      ? "text-blueGradient"
                      : "text-gray-500"
                  }`}
                >
                  I am a student
                </span>
                <input
                  type='radio'
                  name='accountType'
                  value='student'
                  checked={accountType === "student"}
                  onChange={() => setAccountType("student")}
                  className='hidden'
                />
                {accountType === "student" ? (
                  <Image
                    src='/images/checkIcon.svg'
                    alt='Check Icon'
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src='/images/faintCheckIcon.svg'
                    alt='Faint Check Icon'
                    width={24}
                    height={24}
                  />
                )}
              </label>
            </div>

            <div
              className={`mb-4 flex items-center justify-between border-2 rounded-lg p-2 w-4/6 ${
                accountType === "institution"
                  ? "border-blueGradient"
                  : "border-gray-300"
              }`}
            >
              <label className='flex items-center w-full'>
                <Image
                  src='/images/teacherIcon.svg'
                  alt='Teacher Icon'
                  width={24}
                  height={24}
                  className='mr-2'
                />
                <span
                  className={`flex-grow text-sm font-medium ${
                    accountType === "institution"
                      ? "text-blueGradient"
                      : "text-gray-500"
                  }`}
                >
                  This is an institution
                </span>
                <input
                  type='radio'
                  name='accountType'
                  value='institution'
                  checked={accountType === "institution"}
                  onChange={() => setAccountType("institution")}
                  className='hidden'
                />
                {accountType === "institution" ? (
                  <Image
                    src='/images/checkIcon.svg'
                    alt='Check Icon'
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src='/images/faintCheckIcon.svg'
                    alt='Faint Check Icon'
                    width={24}
                    height={24}
                  />
                )}
              </label>
            </div>

            <div>
              <button
                type='button'
                onClick={handleContinue}
                className='w-3/4 px-6 py-2  text-neutralWhite rounded-lg'
                style={{ backgroundColor: "#0F172A" }}
              >
                Continue
              </button>
            </div>
          </form>

          <ProgressIndicator step={1} />
        </div>
      </div>
      <div className='hidden md:block md:w-1/2 relative'>
        <Image
          src='/images/techfriends.png'
          alt='Create Account Image'
          layout='fill'
          objectFit='cover'
        />
      </div>
    </div>
  );
}
