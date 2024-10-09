import Image from "next/image";
import Link from "next/link";
import FAQ from "./components/faq";
import UniversitesAndPrograms from "./components/universitiesAndPrograms";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <div
        className='relative bg-contain bg-no-repeat bg-right'
        style={{ backgroundImage: "url('/images/top-bg-logo.svg')" }}
      >
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
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>
          <div className='flex-1 flex justify-end'>
            <Link href='/signup'>
              <button className='bg-primaryBlue text-neutralWhite py-2 px-4 rounded-lg font-light'>
                Sign Up
              </button>
            </Link>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section className='text-center mt-20 mx-24'>
          <h1 className='text-80px  text-textColor mb-12 px-8 font-millik font-normal'>
            <span className='text-orangeColor '>Tuition</span> is your gateway
            to global excellence
          </h1>
          <p
            className='text-textColor leading-8 mb-11 text-[22px]'
            // style={{ fontSize: "22px" }}
          >
            Connecting you with everything you need for a seamless and
            successful educational journey, from guidance and resources to
            support and opportunities.
          </p>
          <Link href='/signup'>
            <button className='bg-primaryBlue text-neutralWhite rounded-lg mb-12 px-20 py-4'>
              Get Started
            </button>
          </Link>
        </section>

        {/* GALLERY SECTION */}
        <section className='mb-28'>
          <div className='p-4'>
            <div className='max-w-[1440px] grid grid-cols-2 md:grid-cols-4 gap-3  mx-auto items-center justify-center'>
              <div className='flex justify-center items-center '>
                <Image
                  src='/images/rectangle22809.png'
                  width={330}
                  height={300}
                  alt='Happy Male Student'
                />
              </div>

              <div className='flex justify-center items-center '>
                <Image
                  src='/images/rectangle22806.png'
                  width={330}
                  height={280}
                  alt='Happy Female Student'
                />
              </div>

              <div className='flex justify-center items-center '>
                <Image
                  src='/images/rectangle22805.png'
                  width={330}
                  height={300}
                  alt='Students using a laptop'
                />
              </div>

              <div className='flex justify-center items-center'>
                <Image
                  src='/images/rectangle22811.png'
                  width={300}
                  height={280}
                  alt='Happy Students in the Snow'
                  className='h-[270px] w-60'
                />
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS SECTION */}
        <section className='bg-[#DFE0E559] py-8 mb-28'>
          <div className='container mx-auto p-4'>
            <div className='flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12'>
              <Image
                src='/images/poweredby.svg'
                width={450}
                height={55}
                alt='Powered by Image'
                className='w-auto '
              />

              <Image
                src='/images/inpartnership.svg'
                width={450}
                height={55}
                alt='Partnership Image'
                className='w-auto '
              />
            </div>
          </div>
        </section>
      </div>

      {/* WHY USE TUITION */}
      <section className='mb-4 mx-24'>
        <h1 className='text-textColor text-80px text-center font-millik font-normal '>
          Why use Tuition?
        </h1>
        <div className='container mx-auto  py-16'>
          <div className='flex justify-between mb-8 '>
            <div className=' card p-6 '>
              <div
                className='mb-4 p-4 inline-block rounded-lg'
                style={{ backgroundColor: "#101740" }}
              >
                <Image
                  src='/images/calendar.svg'
                  alt='Calender icon'
                  width={20}
                  height={20}
                />
              </div>
              <h4 className='text-lg mb-2 text-textColor leading-6'>
                Find events
              </h4>
              <p className='text-textColor text-sm leading-5 '>
                Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem.
                Morbi lacus magna.
              </p>
            </div>
            <div className=' card p-6 '>
              <div
                className='mb-4 p-4 inline-block rounded-lg'
                style={{ backgroundColor: "#27B55B" }}
              >
                <Image
                  src='/images/user-group.svg'
                  alt='Group icon'
                  width={20}
                  height={20}
                />
              </div>
              <h4 className='text-lg mb-2 text-textColor leading-6'>
                Join a community
              </h4>
              <p className='text-textColor text-sm leading-5 '>
                Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem.
                Morbi lacus magna.
              </p>
            </div>
            <div className=' card p-6 '>
              <div
                className='mb-4 p-4 inline-block rounded-lg'
                style={{ backgroundColor: "#F1622D" }}
              >
                <Image
                  src='/images/coins.svg'
                  alt='Coins icon'
                  width={20}
                  height={20}
                />
              </div>
              <h4 className='text-lg mb-2 text-textColor leading-6'>
                Access financial aid offers
              </h4>
              <p className='text-textColor text-sm leading-5 '>
                Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem.
                Morbi lacus magna.
              </p>
            </div>
          </div>
          <div className='flex justify-center mb-8 '>
            <div className=' card p-6 '>
              <div
                className='mb-4 p-4 inline-block rounded-lg'
                style={{ backgroundColor: "#F1622D" }}
              >
                <Image
                  src='/images/grid-2.svg'
                  alt='Icon representing schools'
                  width={20}
                  height={20}
                />
              </div>
              <h4 className='text-lg mb-2 text-textColor leading-6'>
                Apply to your choice schools
              </h4>
              <p className='text-textColor text-sm leading-5 '>
                Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem.
                Morbi lacus magna.
              </p>
            </div>
            <div className='card p-6 mx-12'>
              <div
                className='mb-4 p-4 inline-block rounded-lg'
                style={{ backgroundColor: "#101740" }}
              >
                <Image
                  src='/images/bulb.svg'
                  alt='Resources icon'
                  width={20}
                  height={20}
                />
              </div>
              <h4 className='text-lg mb-2 text-textColor leading-6 '>
                Find resources and information
              </h4>
              <p className='text-textColor text-sm leading-5 '>
                Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem.
                Morbi lacus magna.
              </p>
            </div>
            <div className=' card p-6 '>
              <div
                className='mb-4 p-4 inline-block rounded-lg'
                style={{ backgroundColor: "#27B55B" }}
              >
                <Image
                  src='/images/bulb.svg'
                  alt='Pay tuition icon'
                  width={20}
                  height={20}
                />
              </div>
              <h4 className='text-lg mb-2 text-textColor leading-6'>
                Pay tuition
              </h4>
              <p className='text-textColor text-sm leading-5 '>
                Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem.
                Morbi lacus magna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className='container mx-auto p-4 mb-28'>
          <h1 className='text-textColor text-80px text-center font-millik font-normal '>
            How It Works
          </h1>

          <div className='relative flex flex-col md:flex-row justify-between  space-y-8 md:space-y-0 md:space-x-8 py-32'>
            <div className='flex space-x-4 '>
              <div className='text-primaryBlue  border-2 border-primaryBlue w-20 h-12 flex items-center justify-center rounded-full font-bold '>
                1
              </div>

              <div className=''>
                <h3 className='font-semiBold text-lg text-textColor '>
                  Find your interest
                </h3>
                <p className='text-textColor pr-6 '>
                  Are you interested in programs, events or financial aid?
                </p>
              </div>
            </div>

            {/* Curly Arrow 1 */}
            <div className='hidden md:block absolute left-[-1%] top-[48%] '>
              <Image
                src='/images/how-it-works-curve1.svg'
                width={270}
                height={180}
                alt='Curly Arrow 1'
                className='w-full'
              />
            </div>

            <div className='flex space-x-4 '>
              <div className='text-primaryBlue  border-2 border-primaryBlue w-20 h-12 flex items-center justify-center rounded-full font-bold '>
                2
              </div>

              <div className=''>
                <h3 className='font-semiBold text-lg text-textColor '>
                  Apply or register
                </h3>
                <p className='text-textColor pr-6 '>
                  Send in an application or register to whatever interests you.
                </p>
              </div>
            </div>

            {/* Curly Arrow 2 */}
            <div className='hidden md:block absolute  left-[24%] top-[11%] '>
              <Image
                src='/images/how-it-works-curve2.svg'
                width={270}
                height={180}
                alt='Curly Arrow 2'
                className='w-full'
              />
            </div>

            <div className='flex space-x-4 '>
              <div className='text-primaryBlue  border-2 border-primaryBlue w-20 h-12 flex items-center justify-center rounded-full font-bold '>
                3
              </div>

              <div className=''>
                <h3 className='font-semiBold text-lg text-textColor '>
                  Get accepted or get tickets
                </h3>
                <p className='text-textColor  '>
                  Either you&apos;re off to school, the bank, or to an event.
                </p>
              </div>
            </div>

            {/* Curly Arrow 3 */}
            <div className='hidden md:block absolute left-[51%] top-[48%]'>
              <Image
                src='/images/how-it-works-curve1.svg'
                width={270}
                height={180}
                alt='Curly Arrow 3'
                className='w-full'
              />
            </div>

            <div className='flex space-x-4 '>
              <div className='text-primaryBlue  border-2 border-primaryBlue w-20 h-12 flex items-center justify-center rounded-full font-bold '>
                4
              </div>

              <div className=''>
                <h3 className='font-semiBold text-lg text-textColor '>
                  Pay fees or get paid
                </h3>
                <p className='text-textColor pr-6'>
                  Pay your fees or receive money to enable your studies.
                </p>
              </div>
            </div>

            {/* Sun Icon */}
            <div className='ml-4'>
              <Image
                src='/images/sparkle.svg'
                width={104}
                height={104}
                alt='Sun Icon'
                className='hidden md:block absolute right-[18%] top-[10%]'
              />
            </div>
          </div>

          <div className=' w-full flex justify-center'>
            <Link href='/signup'>
              <button className='bg-primaryBlue text-neutralWhite rounded-lg px-20 py-4 flex '>
                Start Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* UNIVERSITIES AND PROGRAMS */}
      <UniversitesAndPrograms />

      <div
        className='relative bg-contain bg-no-repeat bg-left'
        style={{ backgroundImage: "url('/images/middle-bg-logo.svg')" }}
      >
        {/* HEAR FROM OUR ROCKSTARS */}
        <section className='mb-28  pt-28'>
          <h1 className='text-textColor text-80px text-center font-millik font-normal mx-24'>
            Hear from our rockstars at Tuition
          </h1>
          <div className='mt-16 px-4'>
            <Image
              src='/images/rockstars.png'
              width={1240}
              height={480}
              alt='Video of rockstars'
              className=' mx-auto'
            />
          </div>
        </section>

        {/* WHAT STUDENTS SAY */}
        <section className='mx-24 mb-28'>
          <h1 className='text-textColor text-80px text-center font-millik font-normal mx-24'>
            What students say
          </h1>
          <div className='container mx-auto px-4 pt-10'>
            <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0'>
              <div className='bg-white  p-6 text-center w-full md:w-1/3'>
                <h4 className='text-xl mb-4 leading-8'>
                  “Tuition made it so simple. My application process was much
                  faster & easier to navigate.”
                </h4>
                <div className='flex flex-row items-center justify-center'>
                  <Image
                    src='/images/IlyaEke.png'
                    alt='Ilya Vasin Picture'
                    width={65}
                    height={65}
                    className='rounded-full mt-3'
                  />
                  <div className='mt-4 text-center ms-3'>
                    <h5
                      className='text-lg leading-7 font-semibold'
                      style={{ color: "#161C2D" }}
                    >
                      Ilya Eke
                    </h5>
                  </div>
                </div>
              </div>

              <div className='bg-white  p-6 text-center w-full md:w-1/3'>
                <h4 className='text-xl mb-4 leading-8'>
                  “I no longer have issues making Tuition payments from my local
                  currency.”
                </h4>
                <div className='flex flex-row items-center justify-center'>
                  <Image
                    src='/images/MarioAfiah.png'
                    alt='Mariano Rasgado Picture'
                    width={65}
                    height={65}
                    className='rounded-full mt-3'
                  />
                  <div className='mt-4 text-center ms-3'>
                    <h5
                      className='text-lg leading-7 font-semibold'
                      style={{ color: "#161C2D" }}
                    >
                      Mario Afiah
                    </h5>
                  </div>
                </div>
              </div>

              <div className='bg-white  p-6 text-center w-full md:w-1/3'>
                <h4 className='text-xl mb-4 leading-8'>
                  “I am glad to be a beneficiary of a scholarship i found on the
                  Tuition platform.”
                </h4>
                <div className='flex flex-row items-center justify-center'>
                  <Image
                    src='/images/OkaTiemeni.png'
                    alt='Oka Tomoaki Picture'
                    width={65}
                    height={65}
                    className='rounded-full mt-3'
                  />
                  <div className='mt-4 text-center ms-3'>
                    <h5
                      className='text-lg leading-7 font-semibold'
                      style={{ color: "#161C2D" }}
                    >
                      Oka Tiemeni
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* FLUTTER WAVE STUDENT LOAN  - AD 2*/}
      <section className='m-4'>
        <div className='bg-[#F5AFCB73] rounded-lg pl-6 mb-28'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left mt-12 px-4'>
              <Image
                src='/images/flutterLogo.png'
                width={86}
                height={71}
                alt='Flutterwave Logo'
                className='mb-5'
              />
              <h2 className='text-4xl md:text-6xl font-bold text-[#0A0E27] mb-5'>
                Flutterwave <br /> Student Loan
              </h2>
              <p className='text-textColor text-lg mb-6'>
                Access Flutterwave Student Loans through Tuition &ndash; Easy,
                Flexible, and Designed to Help You Achieve Your Academic Dreams!
              </p>
              <Link href='/signup'>
                <button className='bg-primaryBlue text-neutralWhite rounded-lg mb-5 px-16 py-3'>
                  Apply Now
                </button>
              </Link>
            </div>

            <div className='md:w-1/2 flex justify-center items-center space-x-4 mt-6 md:mt-0 '>
              <Image
                src='/images/sparkle.svg'
                width={60}
                height={60}
                alt='Sparkle'
                className='w-1/5'
              />
              <Image
                src='/images/studentloan.png'
                width={743}
                height={543}
                alt='Student holding books'
                className='w-4/5 '
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* ULTIMATE EDUCATION PARTNER */}
      <section
        className='text-center pt-8  text-white container mx-auto px-4'
        // style={{ backgroundImage: "url('/images/educationpartnerbg.svg')" }}
      >
        <div
          className='relative bg-contain bg-no-repeat bg-left rounded-lg py-12'
          style={{
            backgroundColor: "#12183A",
            paddingLeft: "104px",
            paddingRight: "104px",
            backgroundImage: "url('/images/educationpartnerbg.svg')",
          }}
        >
          <h1 className='text-white text-6xl text-center font-millik font-normal mx-24'>
            Your Ultimate Education Partner
          </h1>
          <p className='py-4'>
            At Tuition, we understand the pivotal role institutions play in
            shaping the future of education. So we&apos;ve crafted a platform
            tailored to meet your institution&apos;s needs. Simplify your
            operations and connect with prospective students effortlessly.
          </p>
          <button className='bg-primaryBlue text-neutralWhite rounded-lg px-20 py-4 mt-10'>
            Enrol your institution
          </button>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <div
        className='relative bg-contain bg-no-repeat bg-right pt-8'
        style={{ backgroundImage: "url('/images/top-bg-logo.svg')" }}
      >
        <section className='text-center py-16 '>
          <h1 className='text-textColor text-80px text-center font-millik font-normal mx-24 mb-12'>
            Get in touch
          </h1>
          <div className='flex justify-center align-middle gap-16 text-center '>
            <div className='px-5'>
              <Image
                src='/images/twi3.svg'
                alt='Twitter'
                width={32}
                height={32}
                className='mx-auto'
              />
              <p className='leading-6 text-textColor'>Twitter</p>
            </div>
            <div className='px-5'>
              <Image
                src='/images/ig4.svg'
                alt='Instagram'
                width={32}
                height={32}
                className='mx-auto'
              />
              <p className='leading-6 text-textColor'>Instagram</p>
            </div>
            <div className='px-5'>
              <Image
                src='/images/facebook.svg'
                alt='Facebook'
                width={32}
                height={32}
                className='mx-auto'
              />
              <p className='leading-6 text-textColor'>Facebook</p>
            </div>
          </div>
          <div className='py-9 my-10 bg-grayColor200'>
            <form className='max-w-2xl  mx-auto  rounded-lg '>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-5'>
                <div className='text-left'>
                  <label
                    htmlFor='name'
                    className='text-sm font-medium text-gray-700'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                  />
                </div>
                <div className='text-left'>
                  <label
                    htmlFor='email'
                    className=' text-sm font-medium text-gray-700'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                  />
                </div>
              </div>
              <div className='mb-6 text-left'>
                <label htmlFor='message' className=' text-sm text-grayColor900'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  placeholder='Tell about your project...'
                  className='mt-1 block w-full p-2 border rounded-md'
                ></textarea>
              </div>
              <div className='text-center'>
                <button
                  type='submit'
                  className='px-6 py-3 bg-primaryBlue text-neutralWhite font-semibold rounded-lg '
                >
                  Send us a message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* BE THE FIRST TO KNOW */}
        <section className='relative top-12 bg-[#F4F1F8] py-16 mx-12 rounded-lg'>
          <div className='container mx-auto text-center'>
            <h1 className='text-4xl font-millik font-bold text-[#2A3342] mb-2'>
              Be the first to know when we launch
            </h1>
            <p className='text-xl text-[#556987] font-semiBold mb-6'>
              Stay in the loop with everything you need to know.
            </p>

            <div className='max-w-[458px] mx-auto'>
              <div className='flex justify-center items-center mb-2 gap-6'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='p-3 border border-[#D5DAE1] rounded-lg focus:outline-none  w-80'
                />
                <button className='bg-primaryBlue text-white px-6 py-3 rounded-lg '>
                  Subscribe
                </button>
              </div>

              <p className='text-sm font-semiBold text-[#556987] text-left'>
                We care about your data in our{" "}
                <span className='text-[#2A3362]'>privacy policy</span>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
