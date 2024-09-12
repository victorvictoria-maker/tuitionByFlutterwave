import Image from "next/image";
import Footer from "../../components/auth/footer";
import Link from "next/link";

const ConfirmEmail = () => {
  return (
    <>
      <div className='h-[95vh] flex items-center justify-center '>
        <div className='flex w-full overflow-hidden'>
          <div
            className='hidden lg:block lg:w-1/2 bg-cover bg-no-repeat h-[95vh]'
            style={{
              backgroundImage: `url('/images/loginPage.jpeg')`,
              backgroundColor: "rgba(25, 25, 25, 0.6)",
              backgroundBlendMode: "overlay",
              backgroundPosition: "50%",
              minHeight: "95%",
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

          <div className='w-full lg:w-1/2 p-8  flex items-center'>
            <div className='w-[562px] px-24 flex flex-col justify-center items-center mx-auto'>
              <Image
                src='/images/flutterLogo.png'
                alt='Tuition logo'
                width={171}
                height={57}
              />
              <h1 className='font-bold text-lg text-textColor mt-8'>
                Login link sent to email
              </h1>
              <p className='font-semiBold text-sm text-grayColor2 text-center mt-4'>
                We sent a login link to abc***email.com. Kindly check your email
                to continue
              </p>
              <Link href='/signup' className='mt-12'>
                <button>
                  Don&apos;t have an Account?{" "}
                  <span className='text-primaryBlue font-bold'>Sign Up</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmEmail;
