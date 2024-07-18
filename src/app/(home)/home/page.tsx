import Image from "next/image";
import FeaturedUniCard from "../../components/homepage/featuredUniveristies";
import Navbar from "../../components/navigation";
import Sidebar from "../../components/sidebar";
import Categories from "../../components/homepage/courseCategories";
import CoursesRecommended from "../../components/homepage/recommendedCourses";
import universities from "../../data/universities";
import HeroSection from "../../components/heroSection";
import Search from "../../components/search";
import FeaturedPrograms from "../../components/feauturedPrograms";

export const metadata = {
  title: "Home",
};

const Homepage = () => {
  const dummyCategories = [
    "Arts and Humaniities",
    "Business",
    "Language Learning",
    "Applied Natural Science",
    "Health",
    "Information Technology",
    "Math and Logic",
    "Engineering",
    "Social Science",
    "Physical Science",
    "Data Science",
    "Education",
  ];

  const dummyCourses = [
    "Computer Science",
    "Engineering",
    "Education",
    "Design",
    "Medicine",
    "Computer Science",
    "Engineering",
    "Education",
    "Design",
    "Medicine",
  ];

  return (
    <div className='flex'>
      <div className='flex-1 bg-[#eee]'>
        <div className='max-w-[90%] mx-auto'>
          <HeroSection />

          <Search />

          {/* FEAUTURED UNIVERSITIES SECTION  */}
          <section className='mb-12'>
            <h2 className='mb-6 text-2xl font-semibold'>
              Featured Universities
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
              {universities.map((uni) => (
                <FeaturedUniCard key={uni.id} university={uni} />
              ))}
            </div>
          </section>

          {/* ENROLL IN MASTERS SECTION  */}
          <section
            className='mb-12 flex max-w-[702px] mx-auto rounded-lg pl-5  pb-4'
            style={{ border: "1px solid #C1C6E0" }}
          >
            <div className='w-3/4 pt-8'>
              <h4 className='font-semibold leadin-[18px] mb-5'>
                University of Europe for Applied Sciences
              </h4>
              <h2 className='text-xl font-bold mb-5'>
                Enroll to the <br /> Masters in Visual and Experience Design
              </h2>
              <p className='font-sm leading-6 mb-6'>
                Winter semester: 15th June - 15th August
              </p>
              <button
                className='py-3 px-4 rounded-xl text-primaryBlue font-bold leading-[18px]'
                style={{ border: "1px solid #2A3362" }}
              >
                Learn more
              </button>
            </div>
            <div>
              <Image
                src='/images/visualDesign.png'
                width={255}
                height={245}
                alt='Picture depicting Visual Design'
              />
            </div>
          </section>

          <div className='mb-12'>
            <h2 className='mb-6 text-2xl font-semibold'>Categories</h2>
            <Categories categories={dummyCategories} />
          </div>

          <div className='mb-12'>
            <h2 className='mb-6 text-2xl font-semibold'>
              Courses recommended for you
            </h2>
            <CoursesRecommended courses={dummyCourses} />
          </div>

          <div className='mb-28'>
            <h2 className='mb-6 text-2xl font-semibold'>Featured Programs</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
              {universities.map((uni) => (
                <FeaturedPrograms key={uni.id} university={uni} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
