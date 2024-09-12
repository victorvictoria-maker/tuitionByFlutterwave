import Image from "next/image";
import StudentCreateAccountForm from "../../components/auth/studentCreateAccountForm";
import Footer from "../../components/auth/footer";

const CreateAccount = () => {
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

          <div className='lg:w-1/2 '>
            <StudentCreateAccountForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateAccount;
