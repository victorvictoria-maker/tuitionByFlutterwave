"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const UniversitesAndPrograms = () => {
  const cardsData = [
    {
      id: 1,
      logo: "/images/programslogo1.png",
      bgImage: "/images/programsbg1.png",
      discount: "50% scholarship only on Tuition",
      university: "Perxels School of Design",
      degree: "Diploma in User Experience Design",
    },
    {
      id: 2,
      logo: "/images/programslogo2.png",
      bgImage: "/images/programsbg2.png",
      discount: "30% off application fees only on Tuition",
      university: "Trinity College, Dublin",
      degree: "Masters in Applied Clinical Neuropsychology",
    },
    {
      id: 3,
      logo: "/images/programslogo3.png",
      bgImage: "/images/programsbg3.png",
      discount: "100% Scholarship only on Tuition",
      university: "Alt School Africa",
      degree: "Diploma in Front-end Engineering",
    },
    {
      id: 4,
      logo: "/images/programslogo1.png",
      bgImage: "/images/programsbg1.png",
      discount: "50% scholarship only on Tuition",
      university: "Perxels School of Design",
      degree: "Diploma in User Experience Design",
    },
    {
      id: 5,
      logo: "/images/programslogo2.png",
      bgImage: "/images/programsbg2.png",
      discount: "30% off application fees only on Tuition",
      university: "Trinity College, Dublin",
      degree: "Masters in Applied Clinical Neuropsychology",
    },
    {
      id: 6,
      logo: "/images/programslogo3.png",
      bgImage: "/images/programsbg3.png",
      discount: "100% Scholarship only on Tuition",
      university: "Alt School Africa",
      degree: "Diploma in Front-end Engineering",
    },
  ];

  return (
    <section className='px-4 py-12  '>
      <h1 className='text-textColor text-80px text-center font-millik font-normal mx-24 mb-12'>
        Universities and Programs
      </h1>

      <Swiper
        spaceBetween={30}
        slidesPerView={1.2}
        modules={[Mousewheel]}
        mousewheel={{
          forceToAxis: true,
        }}
        grabCursor={true}
        freeMode={true}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
        }}
        className='mySwiper'
      >
        {cardsData.map((card) => (
          <SwiperSlide key={card.id}>
            <div
              className='rounded-lg shadow-lg bg-cover bg-center relative w-full min-w-[350px] h-[550px] '
              style={{ backgroundImage: `url(${card.bgImage})` }}
            >
              <div className='absolute top-4 left-4'>
                <Image
                  src={card.logo}
                  width={107}
                  height={38}
                  alt='University Logo'
                />
              </div>

              <div className='absolute top-4 right-4'>
                <p className='bg-[#029444] text-white text-[10px]  py-1 px-2 rounded-lg'>
                  {card.discount}
                </p>
              </div>

              <div className='absolute bottom-4 left-4 text-white mr-6'>
                <h3 className='font-bold mb-1'>{card.university}</h3>
                <p className='font-millik text-3xl h-[5.5rem] leading-[1.8rem]  '>
                  {card.degree}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default UniversitesAndPrograms;
