import Image from "next/image";

export const metadata = {
  title: "Events",
};

const dummyEvents = [
  {
    id: 1,
    image: "/images/eventsImage.jpeg",
    host: "Hosted by: Tuition",
    date: "Nov 22",
    title: "Event title that can go up to two lines",
    location: "Techzone Park",
    time: "00:00 AM - 00:00 PM",
    price: "₦5000",
  },
  {
    id: 2,
    image: "/images/eventsImage.jpeg",
    host: "Hosted by: Tuition",
    date: "Nov 22",
    title: "New Event title that can go up to two lines",
    location: "Techzone Park",
    time: "00:00 AM - 00:00 PM",
    price: "₦5000",
  },
  {
    id: 3,
    image: "/images/eventsImage.jpeg",
    host: "Hosted by: Tuition",
    date: "Nov 22",
    title: "Event title that can go up to two lines",
    location: "Techzone Park",
    time: "00:00 AM - 00:00 PM",
    price: "₦5000",
  },
];

const dummyEvents2 = [
  {
    id: 1,
    image: "/images/eventsImage.jpeg",
    host: "Hosted by: Tuition",
    date: "Nov 22",
    title: "Event title that can go up to two lines",
    location: "Techzone Park",
    time: "00:00 AM - 00:00 PM",
    price: "₦5000",
  },
  {
    id: 2,
    image: "/images/eventsImage.jpeg",
    host: "Hosted by: Tuition",
    date: "Nov 22",
    title: "New Event title that can go up to two lines",
    location: "Techzone Park",
    time: "00:00 AM - 00:00 PM",
    price: "₦5000",
  },
  {
    id: 3,
    image: "/images/eventsImage.jpeg",
    host: "Hosted by: Tuition",
    date: "Nov 22",
    title: "Event title that can go up to two lines",
    location: "Techzone Park",
    time: "00:00 AM - 00:00 PM",
    price: "₦5000",
  },
  {
    id: 1,
    image: "/images/eventsImage.jpeg",
    host: "Hosted by: Tuition",
    date: "Nov 22",
    title: "Event title that can go up to two lines",
    location: "Techzone Park",
    time: "00:00 AM - 00:00 PM",
    price: "₦5000",
  },
  {
    id: 2,
    image: "/images/eventsImage.jpeg",
    host: "Hosted by: Tuition",
    date: "Nov 22",
    title: "New Event title that can go up to two lines",
    location: "Techzone Park",
    time: "00:00 AM - 00:00 PM",
    price: "₦5000",
  },
  {
    id: 3,
    image: "/images/eventsImage.jpeg",
    host: "Hosted by: Tuition",
    date: "Nov 22",
    title: "Event title that can go up to two lines",
    location: "Techzone Park",
    time: "00:00 AM - 00:00 PM",
    price: "₦5000",
  },
];
const page = () => {
  return (
    <main className='mt-4 mb-20'>
      <h2 className='text-3xl font-bold font-moderat word-wide text-[#01020D]'>
        Events
      </h2>

      <div className='mt-[60px]'>
        <div className='flex mb-8 gap-5'>
          <button className='py-1 px-4 gap-5 bg-blueGradient text-white rounded-lg  focus:outline-none '>
            All
          </button>
          <button className='py-1 px-4 gap-5 bg-white text-[#6F6F6F] border border-[#6F6F6F] rounded-lg  focus:outline-none '>
            Today
          </button>
          <button className='py-1 px-4 gap-[10px] bg-white text-[#6F6F6F] border border-[#6F6F6F] rounded-lg  focus:outline-none '>
            Tomorrow
          </button>
          <button className='py-1 px-4 gap-[10px] bg-white text-[#6F6F6F] border border-[#6F6F6F] rounded-lg  focus:outline-none '>
            This Weekend
          </button>
          <button className='py-1 px-4 gap-[10px] bg-white text-[#6F6F6F] border border-[#6F6F6F] rounded-lg  focus:outline-none '>
            Free
          </button>
        </div>

        <section>
          <div className='flex justify-between items-center mb-7'>
            <h2 className='text-2xl font-semiBold'>Physical events near you</h2>
            <button className='font-semiBold text-primaryBlue'>See more</button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {dummyEvents.map((event) => (
              <div
                key={event.id}
                className='relative bg-white shadow-sm rounded-lg overflow-hidden'
              >
                <div className='relative w-full h-60'>
                  <Image
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    src={event.image}
                    alt={event.title}
                    // className='object-contain'
                  />
                  <div className='absolute top-2 right-2'>
                    <Image
                      src='/images/interestedButton.svg'
                      alt='Pricing ticket icon '
                      width={20}
                      height={20}
                      className='mr-2'
                    />
                  </div>
                  <div className='absolute bottom-0  bg-[#FFE047] text-black px-2 py-1 rounded-tr-[6px]'>
                    {event.host}
                  </div>
                </div>
                <div className='mx-6 mt-[10px] mb-[26px]'>
                  <div className='flex gap-2 mb-2'>
                    <span className='text-blueGradient font-semiBold text-center text-2xl w-1/6'>
                      {event.date}
                    </span>
                    <div className='w-5/6'>
                      <h3 className='text-lg text-[#2D2C3C] font-semiBold mb-2'>
                        {event.title}
                      </h3>
                      <p className='text-[#5A5A5A] leading-5 mb-2'>
                        {event.location}
                      </p>
                      <p className='text-[#5A5A5A] leading-5 mb-2'>
                        {event.time}
                      </p>
                      <div className='flex items-center'>
                        <Image
                          src='/images/pricingTicketIcon.svg'
                          alt='Pricing ticket icon '
                          width={20}
                          height={20}
                          className='mr-2'
                        />
                        <span className='font-semibold text-blueGradient'>
                          {/* open sans font here */}
                          {event.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='h-[350px] flex bg-black text-white rounded-lg overflow-hidden shadow-md my-12'>
          <div className='flex flex-col items-start justify-center w-1/2 pl-16 '>
            <Image
              width={70}
              height={70}
              src='/images/berkeleyIcon.svg'
              alt='Berkeley Icon'
            />

            <p className='mt-8 text-6xl font-millik'>
              Berkeley <br /> Fall Showcase
            </p>
          </div>
          <div className='w-1/2 h-full flex flex-col justify-center space-y-28 items-end pr-6'>
            <div className='flex gap-5 '>
              <Image
                width={41}
                height={25}
                src='/images/Union.svg'
                alt='Berkeley Icon'
              />
              <p className='font-semibold text-lg text-gray-300'>
                University Avenue and, Oxford St, <br /> Berkeley, CA 94720,
                United States
              </p>
            </div>
            <div className='flex space-x-5'>
              {/* open sans for free button */}
              <button className='flex gap-1 text-white uppercase text-xl font-bold px-6 py-4 rounded-lg  focus:outline-none '>
                <Image
                  width={22}
                  height={22}
                  src='/images/whiteTicket.svg'
                  alt='Berkeley Icon'
                />
                Free
              </button>
              <button className='bg-white text-primaryBlue fomt-bold px-6 py-4 rounded-lg  focus:outline-none '>
                Register
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className='flex justify-between items-center mb-7'>
            <h2 className='text-2xl font-semiBold'>Virtual events near you</h2>
            <button className='font-semiBold text-primaryBlue'>See more</button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {dummyEvents2.map((event) => (
              <div
                key={event.id}
                className='relative bg-white shadow-sm rounded-lg overflow-hidden'
              >
                <div className='relative w-full h-60'>
                  <Image
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    src={event.image}
                    alt={event.title}
                    // className='object-contain'
                  />
                  <div className='absolute top-2 right-2'>
                    <Image
                      src='/images/interestedButton.svg'
                      alt='Pricing ticket icon '
                      width={20}
                      height={20}
                      className='mr-2'
                    />
                  </div>
                  <div className='absolute bottom-0  bg-[#FFE047] text-black px-2 py-1 rounded-tr-[6px]'>
                    {event.host}
                  </div>
                </div>
                <div className='mx-6 mt-[10px] mb-[26px]'>
                  <div className='flex gap-2 mb-2'>
                    <span className='text-blueGradient font-semiBold text-center text-2xl w-1/6'>
                      {event.date}
                    </span>
                    <div className='w-5/6'>
                      <h3 className='text-lg text-[#2D2C3C] font-semiBold mb-2'>
                        {event.title}
                      </h3>
                      <p className='text-[#5A5A5A] leading-5 mb-2'>
                        {event.location}
                      </p>
                      <p className='text-[#5A5A5A] leading-5 mb-2'>
                        {event.time}
                      </p>
                      <div className='flex items-center'>
                        <Image
                          src='/images/pricingTicketIcon.svg'
                          alt='Pricing ticket icon '
                          width={20}
                          height={20}
                          className='mr-2'
                        />
                        <span className='font-semibold text-blueGradient'>
                          {/* open sans font here */}
                          {event.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
