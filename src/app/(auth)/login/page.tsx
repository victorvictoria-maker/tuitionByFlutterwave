"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "../../components/auth/loginForm";
import Footer from "../../components/auth/footer";

const StudentForm = () => {
  const router = useRouter();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push("/home");
  };

  return (
    <>
      <div className='h-[100vh] flex items-center justify-center '>
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

          <div className='w-full lg:w-1/2 '>
            <LoginForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentForm;
