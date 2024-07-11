import Image from "next/image";
import Search from "../../components/search";

const dummyVideos = [
  {
    id: 1,
    image: "/images/videoDemo.jpeg",
    tag: "travel",
    title: "Getting through the VISA application process",
  },
  {
    id: 2,
    image: "/images/videoDemo.jpeg",
    tag: "travel",
    title: "Navigating new cultures and environments",
  },
  {
    id: 3,
    image: "/images/videoDemo.jpeg",
    tag: "fresher",
    title: "Welcome to campus! First things first...",
  },
];

const quickReads = [
  {
    id: 1,
    image: "/images/quickReads.jpeg",
    date: "Jan 10, 2022",
    time: "3 Min",
    title: "Prepping for College Interviews",
  },
  {
    id: 2,
    image: "/images/quickReads.jpeg",
    date: "Jan 10, 2022",
    time: "3 Min",
    title: "Prepping for College Interviews",
  },
  {
    id: 3,
    image: "/images/quickReads.jpeg",
    date: "Jan 10, 2022",
    time: "3 Min",
    title: "Prepping for College Interviews",
  },
];

const page = () => {
  return (
    <main className='mt-4 mb-10'>
      <h2 className='text-3xl font-bold font-moderat word-wide text-[#01020D]'>
        Blog
      </h2>
      <div className='mt-[60px]'>
        <Search />
      </div>

      <section className='mb-20'>
        <div className='flex justify-between items-center mb-7'>
          <h2 className='text-2xl font-semiBold'>Vlogs for you</h2>
          <button className='font-semiBold text-primaryBlue'>See more</button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {dummyVideos.map((video) => (
            <div
              key={video.id}
              className='relative bg-white shadow-sm rounded-lg overflow-hidden'
            >
              <div className='relative w-full h-60'>
                <Image
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  src={video.image}
                  alt={video.title}
                />
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <div className='absolute top-2 right-2 text-[#DFDADA] font-sm'>
                  #{video.tag}
                </div>
                <div className='absolute  bottom-4 left-3 h-[50px] w-[230px] font-bold text-lg  text-white px-2 py-1 '>
                  {video.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className='flex justify-between items-center mb-7'>
          <h2 className='text-2xl font-semiBold'>Quick reads for you</h2>
          <button className='font-semiBold text-primaryBlue'>See more</button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {quickReads.map((eachPost) => (
            <div
              key={eachPost.id}
              className='relative bg-white shadow-sm rounded-lg overflow-hidden'
            >
              <div className='relative w-full h-60'>
                <Image
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  src={eachPost.image}
                  alt={eachPost.title}
                  // className='object-contain'
                />
                <div className='absolute inset-0 bg-[#2a2929] bg-opacity-50'></div>
              </div>

              <div className='mx-6 mt-[10px] mb-[26px]'>
                <p className='font-bold text-textColor text-lg mb-5'>
                  {eachPost.title}
                </p>
                <div className='flex gap-2 text-sm text-textColor font-semiBold '>
                  <span>{eachPost.date}</span>
                  <span>&#x2022;</span>
                  <span>{eachPost.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
