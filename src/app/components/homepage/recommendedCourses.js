const CoursesRecommended = ({ courses }) => {
  return (
    <div className='grid grid-cols-5 gap-4'>
      {courses.map((course, index) => (
        <button
          key={index}
          className='py-5 rounded-xl'
          style={{ border: "1px solid #C1C6E0" }}
        >
          {course}
        </button>
      ))}
    </div>
  );
};

export default CoursesRecommended;
