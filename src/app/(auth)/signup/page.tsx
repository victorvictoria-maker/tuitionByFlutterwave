"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "../../components/auth/footer";

const SignUpPage = () => {
  const router = useRouter();

  const [usertype, setUsertype] = useState("");

  const handleClick = (type: string) => {
    setUsertype(type);
  };

  const continueSignUp = () => {
    if (usertype === "student") {
      router.push("/create-account");
    } else {
      alert("Only students can create account for now.");
    }
  };

  // console.log(usertype);

  return (
    <>
      <div className='min-h-screen flex items-center justify-center '>
        <div className='flex w-full overflow-hidden '>
          <div
            className='hidden lg:block lg:w-1/2 bg-cover bg-no-repeat h-100% '
            style={{
              backgroundImage: `url('/images/studentCreateAccount.jpeg')`,
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

          <div className='lg:w-1/2'>
            <div className='flex flex-col justify-center items-center m-20 p-20 '>
              <h1 className='font-millik text-3xl'>
                Welcome to <span className='text-orangeColor'>Tuition</span>
              </h1>
              <p className=' text-primaryText text-2xl font-semiBold mt-8'>
                What are you signing up as?
              </p>
              <div
                onClick={() => handleClick("student")}
                className={`w-full flex flex-col items-center text-center shadow rounded-lg  mt-16 pt-6 pb-4  ${
                  usertype === "student" ? "bg-primaryBlue  " : " "
                } hover:bg-primaryBlue group`}
              >
                <Image
                  src='/images/flutterLogo.png'
                  alt='Tuition logo'
                  width={80}
                  height={80}
                />
                <h5
                  className={`font-bold mt-[24px] ${
                    usertype === "student"
                      ? "text-white"
                      : "text-primaryText group-hover:text-white"
                  }`}
                >
                  Student
                </h5>
                <p
                  className={`mt-4 ${
                    usertype === "student"
                      ? "text-white"
                      : "text-grayColor2 group-hover:text-white"
                  }`}
                >
                  Send your applications in <br /> real time
                </p>
              </div>
              <div
                onClick={() => handleClick("institution")}
                className={`w-full flex flex-col items-center text-center mt-10 border border-[#8282824D]/30 rounded-lg  ${
                  usertype === "institution" ? "bg-primaryBlue text-white" : " "
                } hover:bg-primaryBlue group`}
              >
                <Image
                  src='/images/flutterLogo.png'
                  alt='Tuition logo'
                  width={80}
                  height={80}
                  className='pt-14 '
                />
                <h5
                  className={`font-bold mt-[24px] ${
                    usertype === "institution"
                      ? "text-white"
                      : "text-primaryText group-hover:text-white"
                  }`}
                >
                  Institution
                </h5>
                <p
                  className={`mt-4 ${
                    usertype === "institution"
                      ? "text-white"
                      : "text-grayColor2 group-hover:text-white"
                  }`}
                >
                  Create your profile and manage <br />
                  student applications
                </p>
              </div>

              <div className='w-full flex lg:flex-row justify-between items-center mt-20'>
                {/* <Link href='/create-account'> */}
                <button
                  onClick={continueSignUp}
                  className='bg-primaryBlue  text-white rounded-lg py-4 px-12'
                >
                  Continue
                </button>
                <Link href='/login'>
                  <button>
                    Have an Account?{" "}
                    <span className='text-primaryBlue font-bold'>Sign In</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpPage;
