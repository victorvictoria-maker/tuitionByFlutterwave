import Image from "next/image";
import Search from "../../components/search";

export const metadata = {
  title: "Financial Aid",
};

const dummyFinance = [
  {
    id: 1,
    logo: "/images/logo3.svg",
    host: "Flutterwave",
    title: "Flutterwave Student Loans",
    openDate: "21st August 2024",
    closeDate: "21st November 2024",
    eligibility: "All students",
    hashtag1: "undergrad",
    hashtag2: "loan",
    amount: "1,500",
  },
  {
    id: 2,
    logo: "/images/logo3.svg",
    host: "Flutterwave",
    title: "Flutterwave Student Loans",
    openDate: "21st August 2024",
    closeDate: "21st November 2024",
    eligibility: "All students",
    hashtag1: "undergrad",
    hashtag2: "loan",
    amount: "1,500",
  },
  {
    id: 3,
    logo: "/images/logo3.svg",
    host: "Flutterwave",
    title: "Flutterwave Student Loans",
    openDate: "21st August 2024",
    closeDate: "21st November 2024",
    eligibility: "All students",
    hashtag1: "undergrad",
    hashtag2: "loan",
    amount: "1,500",
  },
];

const dummyFinance2 = [
  {
    id: 1,
    logo: "/images/logo3.svg",
    host: "Flutterwave",
    title: "Flutterwave Student Loans",
    openDate: "21st August 2024",
    closeDate: "21st November 2024",
    eligibility: "All students",
    hashtag1: "undergrad",
    hashtag2: "loan",
    amount: "1,500",
  },
  {
    id: 2,
    logo: "/images/logo3.svg",
    host: "Flutterwave",
    title: "Flutterwave Student Loans",
    openDate: "21st August 2024",
    closeDate: "21st November 2024",
    eligibility: "All students",
    hashtag1: "undergrad",
    hashtag2: "loan",
    amount: "1,500",
  },
  {
    id: 3,
    logo: "/images/logo3.svg",
    host: "Flutterwave",
    title: "Flutterwave Student Loans",
    openDate: "21st August 2024",
    closeDate: "21st November 2024",
    eligibility: "All students",
    hashtag1: "undergrad",
    hashtag2: "loan",
    amount: "1,500",
  },
  {
    id: 4,
    logo: "/images/logo3.svg",
    host: "Flutterwave",
    title: "Flutterwave Student Loans",
    openDate: "21st August 2024",
    closeDate: "21st November 2024",
    eligibility: "All students",
    hashtag1: "undergrad",
    hashtag2: "loan",
    amount: "1,500",
  },
  {
    id: 5,
    logo: "/images/logo3.svg",
    host: "Flutterwave",
    title: "Flutterwave Student Loans",
    openDate: "21st August 2024",
    closeDate: "21st November 2024",
    eligibility: "All students",
    hashtag1: "undergrad",
    hashtag2: "loan",
    amount: "1,500",
  },
  {
    id: 6,
    logo: "/images/logo3.svg",
    host: "Flutterwave",
    title: "Flutterwave Student Loans",
    openDate: "21st August 2024",
    closeDate: "21st November 2024",
    eligibility: "All students",
    hashtag1: "undergrad",
    hashtag2: "loan",
    amount: "1,500",
  },
];

const page = () => {
  return (
    <main className='mt-4 mb-40'>
      <h2 className='text-3xl font-bold font-moderat word-wide text-[#01020D]'>
        Financial Aid
      </h2>
      <div className='mt-[60px]'>
        <Search />
      </div>

      {/* first three cards */}
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
        {dummyFinance.map((finance) => (
          <div
            key={finance.id}
            className='bg-white text-black rounded-lg overflow-hidden shadow-sm relative'
          >
            {/* Hosted by text */}
            <div className='absolute text-sm font-semiBold top-0 left-0 bg-greenColor25 text-[#2D2C3C] px-2 py-1 rounded-br-lg '>
              Hosted by: {finance.host}
            </div>

            {/* Logo */}
            <div className='flex justify-center pt-12  mb-8'>
              <Image
                src={finance.logo}
                alt={finance.title}
                width={144}
                height={48}
              />
            </div>

            {/* Title */}
            <h2 className='text-lg font-bold mb-4 text-textColor mx-5'>
              {finance.title}
            </h2>

            {/* Paragraphs */}
            <div className='mb-11 text-textColor text-sm mx-5'>
              <p className='mb-2.5'>Opens: {finance.openDate}</p>
              <p className='mb-2.5'>Closes: {finance.closeDate}</p>
              <p>Eligibility: {finance.eligibility}</p>
            </div>

            {/* Hashtags */}
            <div className='flex space-x-2 mb-4 text-sm font-semibold text-[#5A5A5A] mx-5'>
              <span>#{finance.hashtag1}</span>
              <span>#{finance.hashtag2}</span>
            </div>

            {/* Horizontal Line */}
            <hr className='mt-5 px-0' />

            {/* Footer */}
            <div className='flex justify-between items-center mx-5 mt-6 mb-4'>
              <button className='bg-primaryBlue text-white px-6 py-3 rounded-[10px]  focus:outline-none '>
                Apply
              </button>
              <div className='text-right text-textColor'>
                <p className='text-sm '>Amount</p>
                <p className='text-lg '>&#36; {finance.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* mastercard advert section */}
      <section
        className='bg-gray-200 p-8 my-14 rounded-[10px] bg-cover bg-center'
        style={{ backgroundImage: `url('/images/mastercardAdBg.png')` }}
      >
        <div className='flex flex-wrap'>
          {/* Left Side */}
          <div className='w-full lg:w-2/3 p-4'>
            <div className='mb-4'>
              <Image
                src='/images/mastercardLogo.png'
                alt='Logo'
                width={182}
                height={121}
              />
            </div>
            <h2 className='text-[56px] leading-[54px] font-millik mb-4 ml-8'>
              Mastercard <br /> Foundation Scholarship
            </h2>
            <p className='ml-8'>
              Covers tuition, living expenses, travel costs, and provides
              mentoring and career support.
            </p>
          </div>

          {/* Right Side */}
          <div className='w-full lg:w-1/3 pl-20 mt-20 '>
            <p className='mb-2.5 text-sm text-textColor'>
              Opens: 21st August 2024
            </p>
            <p className='mb-2.5 text-sm text-textColor'>
              Closes: 21st November 2024
            </p>
            <p className='mb-2.5 text-sm text-textColor'>
              Eligibility: All students
            </p>
            <button className='bg-primaryBlue mt-6 font-bold text-sm text-neutralWhite px-6 py-4 rounded-lg focus:outline-none '>
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* first six cards */}
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
        {dummyFinance2.map((finance) => (
          <div
            key={finance.id}
            className='bg-white text-black rounded-lg overflow-hidden shadow-sm relative'
          >
            {/* Hosted by text */}
            <div className='absolute text-sm font-semiBold top-0 left-0 bg-greenColor25 text-[#2D2C3C] px-2 py-1 rounded-br-lg '>
              Hosted by: {finance.host}
            </div>

            {/* Logo */}
            <div className='flex justify-center  pt-12 mb-8'>
              <Image
                src={finance.logo}
                alt={finance.title}
                width={144}
                height={48}
              />
            </div>

            {/* Title */}
            <h2 className='text-lg font-bold mb-4 text-textColor mx-5'>
              {finance.title}
            </h2>

            {/* Paragraphs */}
            <div className='mb-11 text-textColor text-sm mx-5'>
              <p className='mb-2.5'>Opens: {finance.openDate}</p>
              <p className='mb-2.5'>Closes: {finance.closeDate}</p>
              <p>Eligibility: {finance.eligibility}</p>
            </div>

            {/* Hashtags */}
            <div className='flex space-x-2 mb-4 text-sm font-semibold text-[#5A5A5A] mx-5'>
              <span>#{finance.hashtag1}</span>
              <span>#{finance.hashtag2}</span>
            </div>

            {/* Horizontal Line */}
            <hr className='mt-5 px-0' />

            {/* Footer */}
            <div className='flex justify-between items-center mx-5 mt-6 mb-4'>
              <button className='bg-primaryBlue text-white px-6 py-3 rounded-[10px]  focus:outline-none '>
                Apply
              </button>
              <div className='text-right text-textColor'>
                <p className='text-sm '>Amount</p>
                <p className='text-lg '>&#36; {finance.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default page;
