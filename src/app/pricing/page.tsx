import Image from "next/image";
import Navbar from "../components/landingpage/navbar";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";
import Footer from "../components/footer";

const PricingPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section className='flex md:flex-row md:gap-5 mt-11 mx-24'>
          <div className='w-1/2'>
            <h1 className='text-textColor text-6xl font-millik font-normal '>
              Kickstart your schooling plans with Tuition
            </h1>
            <p className='font-semiBold text-2xl text-textColor max-w-[80%] my-10'>
              A suite of products to accelerate your education related
              applications.
            </p>
            <p className='leading-7 text-textColor max-w-[90%]'>
              For undergraduate, graduate and postgraduate level programs,
              educational events and financial aid opportunities. Find all the
              help you need in one place.
            </p>
          </div>
          <div className='w-1/2'>
            <Image
              src='/images/pricinghero.png'
              alt='Lady on the Computer '
              width={607}
              height={446}
              className='mx-auto'
            />
          </div>
        </section>

        {/* TERMS AND CONDITION */}
        <section className='mt-24 mx-24'>
          <h5 className='text-center text-sm text-[#0D0C22]'>
            Terms and Conditions apply!
          </h5>
          <div className='flex md:flex-row gap-12 mx-auto justify-center mt-10'>
            <div className='py-11 px-5 border-2 border-orangeColor rounded-lg max-w-[368px]  max-h-[579px]'>
              <h3 className='text-center font-millik text-lg text-[#0D0C22] mb-10'>
                Free Plan
              </h3>
              <ul>
                <li className='flex items-center gap-2 mb-4 py-1'>
                  <FiCheck className='text-white bg-[#009E3A] rounded-full w-[18px]  h-[18px] p-[2px] ' />
                  <span className=' text-[#0D0C22]'>
                    Access to institution and course database
                  </span>
                </li>
                <li className='flex items-center gap-2 mb-4 py-1'>
                  <FiCheck className='text-white bg-[#009E3A] rounded-full w-[18px]  h-[18px] p-[2px] ' />
                  <span className=' text-[#0D0C22]'>
                    Tuition fee payment (charges apply)
                  </span>
                </li>
                <li className='flex items-center gap-2 mb-4 py-1'>
                  <FiCheck className='text-white bg-[#009E3A] rounded-full w-[18px]  h-[18px] p-[2px] ' />
                  <span className=' text-[#0D0C22]'>Download resources</span>
                </li>
                <li className='flex items-center gap-2 mb-4 py-1'>
                  <FiCheck className='text-white bg-[#009E3A] rounded-full w-[18px]  h-[18px] p-[2px] ' />
                  <span className=' text-[#0D0C22]'>Access blog posts</span>
                </li>
                <li className='flex items-center gap-2 mb-4 py-1'>
                  <FiCheck className='text-white bg-[#009E3A] rounded-full w-[18px]  h-[18px] p-[2px] ' />
                  <span className=' text-[#0D0C22]'>
                    Access to in-app support
                  </span>
                </li>
              </ul>
              <div className='text-center mt-9 mb-10'>
                <span
                  aria-label='zero dollars and zero cents'
                  className='text-[#0D0C22] text-5xl font-millik'
                >
                  $0.00
                </span>
                <p className='text-sm text-[#3D3D4E]'>free forever</p>
              </div>
              <Link href='/' className='flex justify-center'>
                <button className='bg-primaryBlue text-neutralWhite rounded-lg px-20 py-4'>
                  Get Started
                </button>
              </Link>
            </div>
            <div className='bg-blueGradient text-white py-11 px-5  rounded-lg w-[440px]'>
              <h3 className='text-center font-millik text-lg text-white mb-4'>
                Premium Plan
              </h3>
              <ul>
                <li className='flex items-center gap-2 mb-4 py-1'>
                  <FiCheck className='text-blueGradient bg-white rounded-full w-[18px]  h-[18px] p-[2px] ' />
                  <span className=' text-white'>Applications to programs</span>
                </li>
                <li className='flex items-center gap-2 mb-4 py-1'>
                  <FiCheck className='text-blueGradient bg-white rounded-full w-[18px]  h-[18px] p-[2px] ' />
                  <span className=' text-white'>
                    Access to financial aid directory
                  </span>
                </li>
                <li className='flex items-center gap-2 mb-4 py-1'>
                  <FiCheck className='text-blueGradient bg-white rounded-full w-[18px]  h-[18px] p-[2px] ' />
                  <span className=' text-white'>
                    Applications to financial aid opportunities
                  </span>
                </li>
                <li className='flex items-center gap-2 mb-4 py-1'>
                  <FiCheck className='text-blueGradient bg-white rounded-full w-[18px]  h-[18px] p-[2px] ' />
                  <span className=' text-white'>Counselling services</span>
                </li>
                <li className='flex items-center gap-2 mb-4 py-1'>
                  <FiCheck className='text-blueGradient bg-white rounded-full w-[18px]  h-[18px] p-[2px] ' />
                  <span className=' text-white'>
                    Access to the Tuition community
                  </span>
                </li>
                <li className='flex items-center gap-2 mb-4 py-1'>
                  <FiCheck className='text-blueGradient bg-white rounded-full w-[18px]  h-[18px] p-[2px] ' />
                  <span className=' text-white'>
                    Access to view and register for events
                  </span>
                </li>
                <li className='flex items-center gap-2 mb-4 py-1'>
                  <FiCheck className='text-blueGradient bg-white rounded-full w-[18px]  h-[18px] p-[2px] ' />
                  <span className=' text-white'>
                    Access to all features on the free plan
                  </span>
                </li>
              </ul>
              <div className='text-center mt-9 mb-10'>
                <p
                  aria-label='fifty dollars cancelled'
                  className='text-orangeColor text-2xl font-millik line-through'
                >
                  $50
                </p>
                <p
                  aria-label='zero dollars and zero cents'
                  className='text-white text-5xl font-millik'
                >
                  $0.00
                </p>
                <p className='text-sm text-white'>per month</p>
                <div className=' flex justify-center gap-0 mt-2'>
                  <p className='text-orangeColor text-sm bg-[#FF45001A] py-2 px-3   rounded-3xl'>
                    50% savings
                  </p>
                  <Image
                    src='/images/savingsarrow.svg'
                    alt='Arrow icon '
                    width={24}
                    height={37}
                    className='relative top-[-10px] right-1'
                  />
                </div>
              </div>
              <Link href='/' className='flex justify-center'>
                <button className='bg-primaryBlue text-neutralWhite rounded-lg  px-20 py-4 '>
                  Subscribe
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className='border border-[#009E3A] py-7 px-9 rounded-lg mt-20 flex mx-24'>
          <div className='w-1/12 flex  flex-col justify-center'>
            <p className=' text-orangeColor font-bold '>FAQ</p>
          </div>

          <div className='w-9/12 '>
            <h3 className='font-bold text-textColor'>
              Does Tuition charge transaction fees?
            </h3>
            <p className='text-sm text-[#414141 mt-3'>
              No, Tuition does not charge transaction fees. All payments made on
              the platform are made using Flutterwave. Transaction charges are
              subject to Flutterwave policies.
            </p>
            <p className='text-sm text-[#414141] mt-5'>
              However, Tuition charges a processing fee of 1% on application fee
              payments for all application made on the platform.
            </p>
          </div>
        </section>

        {/* EXPAND YOUR REACH */}
        <section className='bg-[#EAEBF0] px-24 pt-24 mt-20 mb-28'>
          <div className='w-1/2 '>
            <h5 className='text-sm text-[#009E3A] mb-5'>INSTITUTIONS</h5>
            <h1 className='text-textColor text-5xl  font-millik font-normal mb-5'>
              Expand your reach and connect with students through Tuition.
            </h1>
            <p className='text-xl text-textColor mb-5'>
              Take your institution to the next level by reaching motivated
              students ready to advance their education.
            </p>
            <p className='text-xl text-textColor'>
              Join Tuition to effortlessly manage student applications, boost
              visibility, and access insights that help you stay ahead in
              education.
            </p>
          </div>
          <section className='mt-16 mx-24 relative top-10'>
            <h5 className='text-center text-sm text-[#0D0C22]'>
              Terms and Conditions apply!
            </h5>
            <div className='flex md:flex-row gap-12 mx-auto justify-center mt-10'>
              <div className='py-11  px-5  border-2 border-[#009E3A] rounded-lg max-w-[368px]  max-h-[599px]'>
                <h3 className='text-center font-millik text-lg text-[#0D0C22] mb-3'>
                  Free Plan
                </h3>
                <ul>
                  <li className='flex items-center gap-2 mb-3 py-1'>
                    <FiCheck className='text-white bg-[#009E3A] rounded-full w-[18px]  h-[18px] p-[2px] ' />
                    <span className=' text-[#0D0C22]'>Offer financial aid</span>
                  </li>
                  <li className='flex items-center gap-2 mb-3 py-1'>
                    <FiCheck className='text-white bg-[#009E3A] rounded-full w-[18px]  h-[18px] p-[2px] ' />
                    <span className=' text-[#0D0C22]'>
                      Create Ads (charges apply)
                    </span>
                  </li>
                  <li className='flex items-center gap-2 mb-3 py-1'>
                    <FiCheck className='text-white bg-[#009E3A] rounded-full w-[18px]  h-[18px] p-[2px] ' />
                    <span className=' text-[#0D0C22]'>
                      List events with limited ticketing
                    </span>
                  </li>
                  <li className='flex items-center gap-2 mb-3 py-1'>
                    <FiCheck className='text-white bg-[#009E3A] rounded-full w-[18px]  h-[18px] p-[2px] ' />
                    <span className=' text-[#0D0C22]'>
                      Access to in-app support
                    </span>
                  </li>
                  <li className='flex items-center gap-2 mb-3 py-1'>
                    <FiCheck className='text-white bg-[#009E3A] rounded-full w-[18px]  h-[18px] p-[2px] ' />
                    <span className=' text-[#0D0C22]'>
                      List 1 faculty, upload 1 course
                    </span>
                  </li>
                  <li className='flex items-center gap-2 mb-3 py-1'>
                    <FiCheck className='text-white bg-[#009E3A] rounded-full w-[18px]  h-[18px] p-[2px] ' />
                    <span className=' text-[#0D0C22]'>
                      Receive applications for listed course
                    </span>
                  </li>
                  <li className='flex items-center gap-2 mb-3 py-1'>
                    <FiCheck className='text-white bg-[#009E3A] rounded-full w-[18px]  h-[18px] p-[2px] ' />
                    <span className=' text-[#0D0C22]'>
                      Receive tuition for listed course
                    </span>
                  </li>
                </ul>
                <div className='text-center mt-9 mb-4'>
                  <span
                    aria-label='zero dollars and zero cents'
                    className='text-[#0D0C22] text-5xl font-millik'
                  >
                    $0.00
                  </span>
                  <p className='text-sm text-[#3D3D4E]'>free forever</p>
                </div>
                <Link href='/' className='flex justify-center'>
                  <button className='bg-primaryBlue text-neutralWhite rounded-lg px-20 py-4'>
                    Get Started
                  </button>
                </Link>
              </div>
              <div className='py-11 px-5 border-2 border-[#FFEDE6] bg-[#FFEDE6] rounded-lg w-[440px]  max-h-[599px]'>
                <h3 className='text-center font-millik text-lg text-[#0D0C22] mb-3'>
                  Premium Plan
                </h3>
                <ul>
                  <li className='flex items-center gap-2 mb-3 py-1'>
                    <FiCheck className='text-white bg-[#009E3A] rounded-full w-[18px]  h-[18px] p-[2px] ' />
                    <span className=' text-[#0D0C22]'>
                      Access to all features on the free plan
                    </span>
                  </li>
                  <li className='flex items-center gap-2 mb-3 py-1'>
                    <FiCheck className='text-white bg-[#009E3A] rounded-full w-[18px]  h-[18px] p-[2px] ' />
                    <span className=' text-[#0D0C22]'>
                      List all institution&apos;s faculties
                    </span>
                  </li>
                  <li className='flex items-center gap-2 mb-3 py-1'>
                    <FiCheck className='text-white bg-[#009E3A] rounded-full w-[18px]  h-[18px] p-[2px] ' />
                    <span className=' text-[#0D0C22]'>
                      List all institution&apos;s courses
                    </span>
                  </li>
                  <li className='flex items-center gap-2 mb-3 py-1'>
                    <FiCheck className='text-white bg-[#009E3A] rounded-full w-[18px]  h-[18px] p-[2px] ' />
                    <span className=' text-[#0D0C22]'>
                      Receive applications for all courses listed
                    </span>
                  </li>
                  <li className='flex items-center gap-2 mb-3 py-1'>
                    <FiCheck className='text-white bg-[#009E3A] rounded-full w-[18px]  h-[18px] p-[2px] ' />
                    <span className=' text-[#0D0C22]'>
                      Receive tuition for all courses listed
                    </span>
                  </li>
                  <li className='flex items-center gap-2 mb-3 py-1'>
                    <FiCheck className='text-white bg-[#009E3A] rounded-full w-[18px]  h-[18px] p-[2px] ' />
                    <span className=' text-[#0D0C22]'>
                      List events with unlimited ticketing
                    </span>
                  </li>
                  <li className='flex items-center gap-2 mb-3 py-1'>
                    <FiCheck className='text-white bg-[#009E3A] rounded-full w-[18px]  h-[18px] p-[2px] ' />
                    <span className=' text-[#0D0C22]'>
                      Provide counselling to students
                    </span>
                  </li>
                </ul>
                <div className='text-center mt-9 mb-4'>
                  <span
                    aria-label='zero dollars and zero cents'
                    className='text-[#0D0C22] text-5xl font-millik'
                  >
                    $0.00
                  </span>
                  <p className='text-sm text-[#3D3D4E]'>billed annually</p>
                </div>
                <Link href='/' className='flex justify-center'>
                  <button className='bg-primaryBlue text-neutralWhite rounded-lg px-20 py-4'>
                    Subscribe
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </section>

        {/* UNLOCK PRIORITIES */}
        <section className='bg-blueGradient px-24 pt-24 mt-20 mb-52 flex gap-12 '>
          <div className='w-1/2 text-white'>
            <h5 className='text-sm  mb-5'>SPECIAL</h5>
            <h1 className=' text-5xl  font-millik font-normal mb-5'>
              Unlock priority access, impact and visibility with Tuition
              Membership
            </h1>
            <p className='text-xl  mb-5'>
              Join our Membership Program and amplify your institution&apos;s
              presence on Tuition.
            </p>
            <p className='text-xl'>
              Be part of a network that connects you with the students that
              matter, providing opportunities to grow your impact and stand out
              in the education space.
            </p>
          </div>
          <div className='w-1/2 relative top-32'>
            <h5 className='text-center text-sm text-white mb-10 w-[440px]'>
              Terms and Conditions apply!
            </h5>
            <div className=' bg-[#E6F6EC]  py-6 px-5  rounded-lg w-[440px]'>
              <h3 className='text-center font-millik text-lg mb-4'>
                Membership
              </h3>
              <ul>
                <li className='flex items-center gap-2 mb-2 py-1'>
                  <FiCheck className='text-blueGradient bg-white rounded-full w-[18px]  h-[18px] p-[2px] ' />
                  <span className=' '>
                    Priority placements on featured sections
                  </span>
                </li>
                <li className='flex items-center gap-2 mb-2 py-1'>
                  <FiCheck className='text-blueGradient bg-white rounded-full w-[18px]  h-[18px] p-[2px] ' />
                  <span className=' '>
                    Exclusive access to anonymized student data insights
                  </span>
                </li>
                <li className='flex items-center gap-2 mb-2 py-1'>
                  <FiCheck className='text-blueGradient bg-white rounded-full w-[18px]  h-[18px] p-[2px] ' />
                  <span className=' '>
                    Discounted rates on advertising campaigns
                  </span>
                </li>
                <li className='flex items-center gap-2 mb-2 py-1'>
                  <FiCheck className='text-blueGradient bg-white rounded-full w-[18px]  h-[18px] p-[2px] ' />
                  <span className=' '>
                    Discounted rates on event promotions
                  </span>
                </li>
                <li className='flex items-center gap-2 mb-2 py-1'>
                  <FiCheck className='text-blueGradient bg-white rounded-full w-[18px]  h-[18px] p-[2px] ' />
                  <span className=' '>
                    Access to all features on the free and premium plans
                  </span>
                </li>
                <li className='flex items-center gap-2 mb-2 py-1'>
                  <FiCheck className='text-blueGradient bg-white rounded-full w-[18px]  h-[18px] p-[2px] ' />
                  <span className=' '>
                    Priority access to new features on the platform
                  </span>
                </li>
              </ul>
              <div className='text-center mt-6 mb-7'>
                <p
                  aria-label='fifty dollars cancelled'
                  className='text-orangeColor text-2xl font-millik line-through'
                >
                  $50
                </p>
                <p
                  aria-label='zero dollars and zero cents'
                  className=' text-5xl font-millik'
                >
                  $0.00
                </p>
                <p className='text-sm '>per month</p>
                <div className=' flex justify-center gap-0 mt-2'>
                  <p className='text-orangeColor text-sm bg-[#FF45001A] py-2 px-3   rounded-3xl'>
                    50% savings
                  </p>
                  <Image
                    src='/images/savingsarrow.svg'
                    alt='Arrow icon '
                    width={24}
                    height={37}
                    className='relative top-[-10px] right-1'
                  />
                </div>
              </div>
              <Link href='/' className='flex justify-center'>
                <button className='bg-primaryBlue text-neutralWhite rounded-lg  px-20 py-4 '>
                  Subscribe
                </button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default PricingPage;
