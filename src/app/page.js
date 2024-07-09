import Image from "next/image";
import Link from "next/link";

// import Image from "next/image";

export default function Home() {
  return (
    <>
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
          <Link href='/create-account'>
            <button className='bg-primaryBlue text-neutralWhite py-2 px-4 rounded-lg font-light'>
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
      <main>
        {/* HERO SECTION */}
        <section className='text-center my-20  mx-24'>
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
          <Link href='/create-account'>
            <button className='bg-primaryBlue text-neutralWhite rounded-lg mb-12 px-20 py-4'>
              Get Started
            </button>
          </Link>

          <div>
            <p>Gallery</p>
          </div>
        </section>
        {/* PARTNERS SECTION */}
        <section>Partners section</section>
        {/* WHY USE TUITION */}
        <section className='mx-24'>
          <h1 className='text-textColor text-80px text-center font-semibold '>
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
                  Donec mi lorem, consequat a quam nec, pellentesque pulvinar
                  sem. Morbi lacus magna.
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
                  Donec mi lorem, consequat a quam nec, pellentesque pulvinar
                  sem. Morbi lacus magna.
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
                  Donec mi lorem, consequat a quam nec, pellentesque pulvinar
                  sem. Morbi lacus magna.
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
                  Donec mi lorem, consequat a quam nec, pellentesque pulvinar
                  sem. Morbi lacus magna.
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
                  Donec mi lorem, consequat a quam nec, pellentesque pulvinar
                  sem. Morbi lacus magna.
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
                  Donec mi lorem, consequat a quam nec, pellentesque pulvinar
                  sem. Morbi lacus magna.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section>How it works section</section>
        {/* <section className='mx-24'>
          <h1 className='text-textColor text-80px text-center font-semibold'>
            How it works
          </h1>

          <div className='container mx-auto px-4 py-20'>
            <div className='relative flex justify-between items-start'>
              <div className='flex items-center relative'>
                <div className='w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4'>
                  1
                </div>
                <div>
                  <h4 className='text-lg font-bold mb-2'>Step 1</h4>
                  <p className='text-sm'>Description for step 1.</p>
                </div>
              </div>

              <div className='flex items-center relative'>
                <div className='w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4'>
                  2
                </div>
                <div>
                  <h4 className='text-lg font-bold mb-2'>Step 2</h4>
                  <p className='text-sm'>Description for step 2.</p>
                </div>
              </div>

              <div className='flex items-center relative'>
                <div className='w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4'>
                  3
                </div>
                <div>
                  <h4 className='text-lg font-bold mb-2'>Step 3</h4>
                  <p className='text-sm'>Description for step 3.</p>
                </div>
              </div>

              <div className='flex items-center relative'>
                <div className='w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4'>
                  4
                </div>
                <div>
                  <h4 className='text-lg font-bold mb-2'>Step 4</h4>
                  <p className='text-sm'>Description for step 4.</p>
                </div>
              </div>

              <svg
                width='314'
                height='90'
                viewBox='0 0 314 90'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute'
                style={{
                  top: "50%",
                  left: "calc(25% - 157px + 16px)",
                  transform: "translateY(-50%)",
                }}
              >
                <path
                  d='M5.6991 1.30308C5.25754 0.238217 3.74291 -0.0816777 2.31534 0.588991C0.890288 1.25831 0.0887265 2.66645 0.530294 3.73132L5.6991 1.30308ZM313.77 20.4009C314.152 19.1419 313.291 18.1249 311.845 18.1313L288.31 18.216C286.866 18.2212 285.388 19.245 285.006 20.5042C284.626 21.7619 285.487 22.7788 286.931 22.7738L307.85 22.6988L302.33 40.9308C301.95 42.1887 302.811 43.2057 304.255 43.2004C305.699 43.1954 307.18 42.1703 307.561 40.9111L313.77 20.4009ZM0.530294 3.73132C17.0952 43.7662 52.8247 77.5966 105.738 86.7363C158.785 95.8997 228.549 80.1563 312.517 22.0145L309.796 18.8045C227.015 76.124 159.165 91.0816 108.081 82.2568C56.8619 73.4099 21.9431 40.5645 5.6991 1.30308L0.530294 3.73132Z'
                  fill='#2A3362'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='314'
                height='90'
                viewBox='0 0 314 90'
                fill='none'
                className='absolute'
                style={{
                  top: "10%",
                  left: "calc(50% - 157px + 16px)",
                  transform: "translateY(-50%)",
                }}
              >
                <path
                  d='M5.6991 88.2914C5.25754 89.3563 3.74291 89.6762 2.31534 89.0055C0.890288 88.3362 0.0887265 86.928 0.530294 85.8632L5.6991 88.2914ZM313.77 69.1936C314.152 70.4526 313.291 71.4696 311.845 71.4632L288.31 71.3785C286.866 71.3733 285.388 70.3495 285.006 69.0903C284.626 67.8326 285.487 66.8157 286.931 66.8207L307.85 66.8956L302.33 48.6637C301.95 47.4058 302.811 46.3888 304.255 46.394C305.699 46.3991 307.18 47.4241 307.561 48.6834L313.77 69.1936ZM0.530294 85.8632C17.0952 45.8283 52.8247 11.9979 105.738 2.85814C158.785 -6.30519 228.549 9.4382 312.517 67.58L309.796 70.79C227.015 13.4705 159.165 -1.48708 108.081 7.33766C56.8619 16.1846 21.9431 49.03 5.6991 88.2914L0.530294 85.8632Z'
                  fill='#2A3362'
                />
              </svg>

              <svg
                width='314'
                height='90'
                viewBox='0 0 314 90'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute'
                style={{
                  top: "50%",
                  left: "calc(75% - 157px + 16px)",
                  transform: "translateY(-50%)",
                }}
              >
                <path
                  d='M5.6991 1.30308C5.25754 0.238217 3.74291 -0.0816777 2.31534 0.588991C0.890288 1.25831 0.0887265 2.66645 0.530294 3.73132L5.6991 1.30308ZM313.77 20.4009C314.152 19.1419 313.291 18.1249 311.845 18.1313L288.31 18.216C286.866 18.2212 285.388 19.245 285.006 20.5042C284.626 21.7619 285.487 22.7788 286.931 22.7738L307.85 22.6988L302.33 40.9308C301.95 42.1887 302.811 43.2057 304.255 43.2004C305.699 43.1954 307.18 42.1703 307.561 40.9111L313.77 20.4009ZM0.530294 3.73132C17.0952 43.7662 52.8247 77.5966 105.738 86.7363C158.785 95.8997 228.549 80.1563 312.517 22.0145L309.796 18.8045C227.015 76.124 159.165 91.0816 108.081 82.2568C56.8619 73.4099 21.9431 40.5645 5.6991 1.30308L0.530294 3.73132Z'
                  fill='#2A3362'
                />
              </svg>

              <svg
                width='50'
                height='50'
                viewBox='0 0 50 50'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute'
                style={{
                  top: "-30px",
                  left: "calc(100% - 25px)",
                  transform: "translateX(-50%)",
                }}
              >
                <path
                  d='M25 0L30.4508 16.5492L50 25L30.4508 33.4508L25 50L19.5492 33.4508L0 25L19.5492 16.5492L25 0Z'
                  fill='#FFD700'
                />
              </svg>
            </div>
          </div>
        </section> */}
        {/* WHAT STUDENTS SAY */}
        <section className='mx-24'>
          <h1 className='text-textColor text-80px text-center font-semibold'>
            What students say
          </h1>
          <div className='container mx-auto px-4 py-20'>
            <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0'>
              <div className='bg-white  p-6 text-center w-full md:w-1/3'>
                <h4 className='text-xl mb-4 leading-8'>
                  “You made it so simple. My new site is so much faster & easier
                  to work with Albino.”
                </h4>
                <div className='flex flex-row items-center justify-center'>
                  <Image
                    src='/images/Ilya.svg'
                    alt='Ilya Vasin Picture'
                    width={67}
                    height={47}
                    className='rounded-full mt-3'
                  />
                  <div className='mt-4 text-center ms-3'>
                    <h5
                      className='text-lg leading-7 font-semibold'
                      style={{ color: "#161C2D" }}
                    >
                      Ilya Vasin
                    </h5>
                    <p className='text-sm text-textColor leading-6 '>
                      Software Engineer
                    </p>
                  </div>
                </div>
              </div>

              <div className='bg-white  p-6 text-center w-full md:w-1/3'>
                <h4 className='text-xl mb-4 leading-8'>
                  “You made it so simple. My new site is so much faster & easier
                  to work with Albino.”
                </h4>
                <div className='flex flex-row items-center justify-center'>
                  <Image
                    src='/images/Mariano.svg'
                    alt='Mariano Rasgado Picture'
                    width={67}
                    height={47}
                    className='rounded-full mt-3'
                  />
                  <div className='mt-4 text-center ms-3'>
                    <h5
                      className='text-lg leading-7 font-semibold'
                      style={{ color: "#161C2D" }}
                    >
                      Mariano Rasgado
                    </h5>
                    <p className='text-sm text-textColor leading-6 '>
                      Software Engineer
                    </p>
                  </div>
                </div>
              </div>

              <div className='bg-white  p-6 text-center w-full md:w-1/3'>
                <h4 className='text-xl mb-4 leading-8'>
                  “You made it so simple. My new site is so much faster & easier
                  to work with Albino.”
                </h4>
                <div className='flex flex-row items-center justify-center'>
                  <Image
                    src='/images/Oka.svg'
                    alt='Oka Tomoaki Picture'
                    width={67}
                    height={47}
                    className='rounded-full mt-3'
                  />
                  <div className='mt-4 text-center ms-3'>
                    <h5
                      className='text-lg leading-7 font-semibold'
                      style={{ color: "#161C2D" }}
                    >
                      Oka Tomoaki
                    </h5>
                    <p className='text-sm text-textColor leading-6 '>
                      Software Engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FLUTTER WAVE STUDENT LOAN */}
        {/* <section
          className='container px-4 pt-12 rounded-lg mx-24'
          style={{ background: "rgba(245, 175, 203, 0.45)" }}
        >
          <div className='flex items-center ps-20 pt-12'>
          
            <div className='flex flex-col w-3/4 max-w-md bg-purple-400'>
             
              <Image
                src='/images/flutterLogo.png'
                alt='Flutter Logo'
                width={100}
                height={100}
              />

          
              <h1
                className='text-6xl font-bold mt-5'
                style={{ color: "#0A0E27" }}
              >
                Flutterwave <br /> Student Loan
              </h1>

              <p className='mt-5 text-lg text-textColor leading-8'>
                Access Flutterwave Student Loans through Tuition – Easy,
                Flexible, and Designed to Help You Achieve Your Academic Dreams!
              </p>

            
              <button className='bg-primaryBlue text-neutralWhite rounded-lg mb-12 px-20 py-4'>
                Apply Now
              </button>
            </div>

            <div className='w-1/4 bg-red-600'>
              <Image
                src='/images/studentImage.png'
                alt='Image'
                width={400}
                height={300}
              />
            </div>
          </div>
        </section> */}

        {/* ULTIMATE EDUCATION PARTNER */}
        <section
          className='text-center py-16 rounded-lg text-white mx-24'
          style={{
            backgroundColor: "#12183A",
            paddingLeft: "104px",
            paddingRight: "104px",
          }}
        >
          <h1 className='text-64px  font-semibold mb-8'>
            Your Ultimate Education Partner
          </h1>
          <p className='py-4'>
            At Tuition, we understand the pivotal role institutions play in
            shaping the future of education. So we&apos;ve crafted a platform
            tailored to meet your institution&apos;s needs. Simplify your
            operations and connect with prospective students effortlessly.
          </p>
          <button className='bg-primaryBlue text-neutralWhite rounded-lg px-20 py-4 mt-10'>
            <i>Enrol your institution</i>
          </button>
        </section>

        {/* GET IN TOUCH */}
        <section className='text-center py-16 '>
          <h1 className='text-64px  font-semibold mb-8 '>Get in touch</h1>
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
                  rows='4'
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

        {/* FOOTER */}
        <div className='flex flex-col gap-8 py-20 bg-primaryBlue'>
          <Image
            src='/images/whitelogo3.svg'
            alt='Pay tuition icon'
            width={144}
            height={48}
            className='mx-auto'
          />
          <ul className='flex-1 flex justify-center space-x-6 text-white'>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>

          <p className='text-center text-white'>
            &copy; 2024 Tuition. All rights reserved.
          </p>
        </div>
      </main>
    </>
  );
}
